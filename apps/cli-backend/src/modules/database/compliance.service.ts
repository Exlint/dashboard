import { Injectable } from '@nestjs/common';
import { CodeType } from '@prisma/client';
import randomWords from 'random-words';

import type { IRecommendedPolicy } from '@/interfaces/recommended-policy';
import type { Language } from '@/models/languages';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBComplianceService {
	constructor(private prisma: PrismaService) {}

	public async doesComplianceBelongUser(userId: string, complianceId: string) {
		const complianceDB = await this.prisma.compliance.findFirstOrThrow({
			where: { userId, id: complianceId },
		});

		return complianceDB !== null;
	}

	public getCompliance(complianceId: string) {
		return this.prisma.compliance.findFirstOrThrow({
			where: { id: complianceId },
			select: {
				inlinePolicies: {
					select: {
						library: true,
						formConfiguration: true,
						codeConfiguration: true,
						isFormConfiguration: true,
						codeType: true,
						lintedList: true,
						ignoredList: true,
						rules: {
							select: {
								name: true,
								configuration: true,
								isEnabled: true,
							},
						},
					},
				},
			},
		});
	}

	public async addRecommendedCompliance(
		userId: string,
		policies: IRecommendedPolicy[],
		languages: Language[],
	) {
		const languagesForDescription = languages.join(', ');
		const [randomString] = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });

		const createdCompliance = await this.prisma.compliance.create({
			data: {
				userId,
				label: `Exlint Imported Compliance ${randomString}`,
				description: `This compliance was created using the "go" command for these languages: ${languagesForDescription}`,
			},
			select: { id: true },
		});

		await this.prisma.inlinePolicy.createMany({
			data: policies.map((policy) => ({
				complianceId: createdCompliance.id,
				label: `${policy.library} Policy`,
				description: 'This policy was created using the "go" command',
				library: policy.library,
				codeConfiguration: JSON.stringify(policy.configuration, null, 2),
				codeType: CodeType.JSON,
				lintedList: policy.lintedList,
				ignoredList: policy.ignoredList,
			})),
		});

		return createdCompliance.id;
	}
}
