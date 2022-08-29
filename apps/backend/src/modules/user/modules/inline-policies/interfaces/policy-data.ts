import type { InlinePolicy } from '@prisma/client';

export type IGetPolicyData = Pick<InlinePolicy, 'label' | 'library'> & {
	readonly createdAt: number;
	readonly groupLabel: string | null;
};
