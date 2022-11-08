import type { FilesListType } from '@exlint-dashboard/common';
import { Injectable } from '@nestjs/common';
import type { CodeType, PolicyLibrary } from '@prisma/client';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBInlinePolicyService {
	constructor(private prisma: PrismaService) {}

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

	public async doesInlinePolicyBelongUser(inlinePolicyId: string, userId: string) {
		const inlinePolicyDB = await this.prisma.inlinePolicy.findFirst({
			where: { id: inlinePolicyId, group: { userId } },
		});

		return inlinePolicyDB !== null;
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
			select: { codeConfiguration: true, codeType: true },
		});
	}

	public async setCodeConfiguration(policyId: string, input: string | null, type: CodeType) {
		await this.prisma.inlinePolicy.update({
			where: { id: policyId },
			data: { codeConfiguration: input, codeType: type },
		});
	}
}
