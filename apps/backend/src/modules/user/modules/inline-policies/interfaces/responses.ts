import type { Prisma } from '@prisma/client';

export interface ICreateInlinePolicy {
	policyId: string;
}

export interface IGetConfigurationResponse {
	configuration: Prisma.JsonValue;
}
