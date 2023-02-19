import { Injectable } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Injectable()
export class DBComplianceService {
	constructor(private prisma: PrismaService) {}

	public async createCompliance(userId: string, label: string, description: string | null) {
		const createdCompliance = await this.prisma.compliance.create({
			data: { userId, label, description },
			select: { id: true },
		});

		return createdCompliance.id;
	}

	public async doesComplianceBelongUser(userId: string, complianceId: string) {
		const complianceDB = await this.prisma.compliance
			.findFirst({ where: { userId, id: complianceId } })
			.catch(() => null);

		return complianceDB !== null;
	}

	public async editComplianceLabel(complianceId: string, label: string) {
		await this.prisma.compliance.update({ where: { id: complianceId }, data: { label } });
	}

	public async editComplianceDescription(complianceId: string, description: string | null) {
		await this.prisma.compliance.update({ where: { id: complianceId }, data: { description } });
	}

	public async deleteCompliance(complianceId: string) {
		await this.prisma.compliance.delete({ where: { id: complianceId } });
	}

	public getUserCompliances(userId: string) {
		return this.prisma.compliance.findMany({
			where: { userId },
			select: {
				id: true,
				label: true,
				inlinePolicies: {
					select: { library: true },
				},
			},
		});
	}

	public async isLabelAvailable(userId: string, label: string) {
		const record = await this.prisma.compliance.findFirst({
			where: { userId, label },
		});

		return record === null;
	}

	public getUserCompliance(complianceId: string) {
		return this.prisma.compliance.findUnique({
			where: { id: complianceId },
			select: {
				label: true,
			},
		});
	}

	public async getInlinePoliciesAndDescription(complianceId: string, page: number) {
		const [count, policies] = await this.prisma.$transaction([
			this.prisma.inlinePolicy.count({
				where: {
					complianceId,
				},
			}),
			this.prisma.compliance.findUniqueOrThrow({
				where: { id: complianceId },
				select: {
					description: true,
					inlinePolicies: {
						select: {
							id: true,
							label: true,
							library: true,
						},
						take: 10,
						skip: 10 * (page - 1),
					},
				},
			}),
		]);

		return {
			...policies,
			count,
		};
	}
}
