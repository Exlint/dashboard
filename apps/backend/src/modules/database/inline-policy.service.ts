import type { FilesListType } from '@exlint-dashboard/common';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import type { CodeType, PolicyLibrary, Prisma } from '@prisma/client';

import { librariesData } from '@/data/libraries-data';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBInlinePolicyService {
	constructor(private prisma: PrismaService) {}

	public async getPolicyLibrary(policyId: string, userId: string) {
		const policyRecord = await this.prisma.inlinePolicy.findFirst({
			where: { id: policyId, group: { userId } },
			select: { library: true },
		});

		if (!policyRecord) {
			throw new UnauthorizedException();
		}

		return policyRecord.library;
	}

	public async createInlinePolicy(
		groupId: string,
		label: string,
		description: string | null,
		library: PolicyLibrary,
	) {
		const createdRecord = await this.prisma.inlinePolicy.create({
			data: { groupId, label, description, library },
		});

		return createdRecord.id;
	}

	public async doesInlinePolicyBelongUser(policyId: string, userId: string) {
		const policyRecord = await this.prisma.inlinePolicy.findFirst({
			where: { id: policyId, group: { userId } },
		});

		return policyRecord !== null;
	}

	public async isLabelAvailable(userId: string, label: string) {
		const record = await this.prisma.inlinePolicy.findFirst({
			where: { label, group: { userId } },
		});

		return record === null;
	}

	public getUserGroupLibraries(groupId: string) {
		return this.prisma.inlinePolicy.findMany({ where: { groupId }, select: { library: true } });
	}

	public async groupHasLibrary(groupId: string, library: PolicyLibrary) {
		const record = await this.prisma.inlinePolicy.findFirst({ where: { groupId, library } });

		return record !== null;
	}

	public get(policyId: string) {
		return this.prisma.inlinePolicy.findUniqueOrThrow({
			where: { id: policyId },
			select: {
				group: { select: { label: true } },
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

	public async getFormSchema(policyId: string) {
		const policyRecord = await this.prisma.inlinePolicy.findUniqueOrThrow({
			where: { id: policyId },
			select: { library: true, formConfiguration: true, isFormConfiguration: true },
		});

		const libraryData = librariesData.find((libraryData) => libraryData.name === policyRecord.library)!;

		return {
			schema: libraryData.configuration,
			formConfiguration: policyRecord.formConfiguration as Prisma.JsonObject,
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
				where: { policyId },
			}),
			this.prisma.inlinePolicy.findUniqueOrThrow({
				where: { id: policyId },
				select: {
					isFormConfiguration: true,
					rules: { select: { id: true, name: true }, take: 10, skip: 10 * (page - 1) },
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
