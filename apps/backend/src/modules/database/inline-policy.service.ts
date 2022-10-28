import { Injectable } from '@nestjs/common';
import type { PolicyLibrary } from '@prisma/client';

import { FileListType } from '@/models/file-list';

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

	public async setFileList(policyId: string, files: string[], type: FileListType) {
		if (type === FileListType.File) {
			await this.prisma.inlinePolicy.update({ where: { id: policyId }, data: { fileList: files } });

			return;
		}

		await this.prisma.inlinePolicy.update({ where: { id: policyId }, data: { ignoreList: files } });
	}

	public async getFileList(policyId: string, type: FileListType) {
		if (type === FileListType.File) {
			const policyDocument = await this.prisma.inlinePolicy.findUniqueOrThrow({
				where: { id: policyId },
				select: { fileList: true },
			});

			return policyDocument.fileList;
		}

		const policyDocument = await this.prisma.inlinePolicy.findUniqueOrThrow({
			where: { id: policyId },
			select: { ignoreList: true },
		});

		return policyDocument.ignoreList;
	}

	public async getConfiguration(policyId: string) {
		const document = await this.prisma.inlinePolicy.findUniqueOrThrow({
			where: { id: policyId },
			select: { configuration: true },
		});

		return document.configuration;
	}

	public async setCodeConfiguration(policyId: string, input: object | null) {
		await this.prisma.inlinePolicy.update({ where: { id: policyId }, data: { configuration: input } });
	}
}
