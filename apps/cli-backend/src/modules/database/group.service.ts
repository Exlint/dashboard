import { Injectable } from '@nestjs/common';
import { CodeType } from '@prisma/client';
import randomWords from 'random-words';

import type { IRecommendedPolicy } from '@/interfaces/recommended-policy';
import type { Language } from '@/models/languages';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBGroupService {
	constructor(private prisma: PrismaService) {}

	public async doesGroupBelongUser(userId: string, groupId: string) {
		const groupDB = await this.prisma.group.findFirstOrThrow({ where: { userId, id: groupId } });

		return groupDB !== null;
	}

	public getGroup(groupId: string) {
		return this.prisma.group.findFirstOrThrow({
			where: { id: groupId },
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

	public async addRecommendedGroup(userId: string, policies: IRecommendedPolicy[], languages: Language[]) {
		const languagesForDescription = languages.join(', ');
		const [randomString] = randomWords({ exactly: 1, wordsPerString: 2, separator: '-' });

		const createdGroup = await this.prisma.group.create({
			data: {
				userId,
				label: `Exlint Imported Group ${randomString}`,
				description: `This group was created using the "go" command for these languages: ${languagesForDescription}`,
			},
			select: { id: true },
		});

		await this.prisma.inlinePolicy.createMany({
			data: policies.map((policy) => ({
				groupId: createdGroup.id,
				label: `${policy.library} Policy`,
				description: 'This policy was created using the "go" command',
				library: policy.library,
				codeConfiguration: JSON.stringify(policy.configuration),
				codeType: CodeType.JSON,
				lintedList: policy.lintedList,
				ignoredList: policy.ignoredList,
			})),
		});

		return createdGroup.id;
	}
}
