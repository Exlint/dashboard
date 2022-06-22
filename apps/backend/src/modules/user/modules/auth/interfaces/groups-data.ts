import { PolicyLibrary, Prisma } from '@prisma/client';

export interface IGroupData {
	id: string;
	label: string | null;
	createdAt: Date;
	inlinePolicies: {
		id: string;
		label: string;
		createdAt: Date;
		library: PolicyLibrary;
		configuration: Prisma.JsonValue;
	}[];
}
