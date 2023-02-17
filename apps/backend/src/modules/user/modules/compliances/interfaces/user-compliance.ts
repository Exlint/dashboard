import type { InlinePolicy } from '@prisma/client';

export type IUserComplianceInlinePolicy = Pick<InlinePolicy, 'id' | 'label' | 'library'> & {
	rulesCount: number;
};
