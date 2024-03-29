import type { FilesListType } from '@exlint.io/common';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import type { CodeType, PolicyLibrary, Prisma } from '@prisma/client';

import { librariesData } from '@/data/libraries-data';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBInlinePolicyService {
	constructor(private prisma: PrismaService) {}

	public async getPolicyLibrary(policyId: string, userId: string) {
		const policyRecord = await this.prisma.inlinePolicy.findFirst({
			where: { id: policyId, compliance: { userId } },
			select: { library: true },
		});

		if (!policyRecord) {
			throw new UnauthorizedException();
		}

		return policyRecord.library;
	}

	public async createInlinePolicy(
		complianceId: string,
		label: string,
		description: string | null,
		library: PolicyLibrary,
	) {
		const createdRecord = await this.prisma.inlinePolicy.create({
			data: { complianceId, label, description, library },
		});

		return createdRecord.id;
	}

	public async doesInlinePolicyBelongUser(policyId: string, userId: string) {
		const policyRecord = await this.prisma.inlinePolicy.findFirst({
			where: { id: policyId, compliance: { userId } },
		});

		return policyRecord !== null;
	}

	public async isLabelAvailable(userId: string, label: string) {
		const record = await this.prisma.inlinePolicy.findFirst({
			where: { label, compliance: { userId } },
		});

		return record === null;
	}

	public getUserComplianceLibraries(complianceId: string) {
		return this.prisma.inlinePolicy.findMany({ where: { complianceId }, select: { library: true } });
	}

	public async complianceHasLibrary(complianceId: string, library: PolicyLibrary) {
		const record = await this.prisma.inlinePolicy.findFirst({ where: { complianceId, library } });

		return record !== null;
	}

	public get(policyId: string) {
		return this.prisma.inlinePolicy.findUniqueOrThrow({
			where: { id: policyId },
			select: {
				compliance: { select: { label: true } },
				label: true,
				library: true,
			},
		});
	}

	public async editPolicyLabel(policyId: string, label: string) {
		await this.prisma.inlinePolicy.update({ where: { id: policyId }, data: { label } });
	}

	public async deletePolicy(policyId: string) {
		await this.prisma.inlinePolicy.delete({ where: { id: policyId } });
	}

	public async setFileList(policyId: string, files: string[], type: FilesListType) {
		if (type === 'linted') {
			await this.prisma.inlinePolicy.update({ where: { id: policyId }, data: { lintedList: files } });

			return;
		}

		await this.prisma.inlinePolicy.update({ where: { id: policyId }, data: { ignoredList: files } });
	}

	public async getFilesList(policyId: string, type: FilesListType) {
		if (type === 'linted') {
			const policyDocument = await this.prisma.inlinePolicy.findUniqueOrThrow({
				where: { id: policyId },
				select: { lintedList: true },
			});

			return policyDocument.lintedList;
		}

		const policyDocument = await this.prisma.inlinePolicy.findUniqueOrThrow({
			where: { id: policyId },
			select: { ignoredList: true },
		});

		return policyDocument.ignoredList;
	}

	public getCodeConfiguration(policyId: string) {
		return this.prisma.inlinePolicy.findUniqueOrThrow({
			where: { id: policyId },
			select: { codeConfiguration: true, codeType: true, isFormConfiguration: true },
		});
	}

	public async setCodeConfiguration(policyId: string, input: string | null, type: CodeType) {
		await this.prisma.inlinePolicy.update({
			where: { id: policyId },
			data: { codeConfiguration: input, codeType: type },
		});
	}

	public async setFormConfiguration(policyId: string, data: Prisma.JsonValue) {
		await this.prisma.inlinePolicy.update({
			where: { id: policyId },
			data: { formConfiguration: data },
		});
	}

	public async getFormSchema(policyId: string) {
		const policyRecord = await this.prisma.inlinePolicy.findUniqueOrThrow({
			where: { id: policyId },
			select: { library: true, formConfiguration: true, isFormConfiguration: true },
		});

		const libraryData = librariesData.find((libraryData) => libraryData.name === policyRecord.library)!;

		return {
			schema: libraryData.configuration,
			formConfiguration: policyRecord.formConfiguration,
			isFormConfiguration: policyRecord.isFormConfiguration,
		};
	}

	public async setIsFormConfiguration(policyId: string, isFormConfiguration: boolean) {
		await this.prisma.inlinePolicy.update({
			where: { id: policyId },
			data: { isFormConfiguration },
		});
	}

	public async getPolicyRules(policyId: string, page: number) {
		const [count, rulesData] = await this.prisma.$transaction([
			this.prisma.rule.count({
				where: { policyId, isEnabled: true },
			}),
			this.prisma.inlinePolicy.findUniqueOrThrow({
				where: { id: policyId },
				select: {
					isFormConfiguration: true,
					rules: {
						where: { isEnabled: true },
						select: { id: true, name: true },
						take: 10,
						skip: 10 * (page - 1),
					},
					description: true,
					createdAt: true,
				},
			}),
		]);

		return {
			...rulesData,
			count,
		};
	}

	public async editPolicyDescription(policyId: string, description: string | null) {
		await this.prisma.inlinePolicy.update({ where: { id: policyId }, data: { description } });
	}
}
