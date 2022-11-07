import type { InlinePolicy } from '@prisma/client';

export type IUserGroupInlinePolicy = Pick<InlinePolicy, 'id' | 'label' | 'library'> & { rulesCount: number };
