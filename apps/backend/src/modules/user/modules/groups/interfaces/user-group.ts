import type { Group, InlinePolicy } from '@prisma/client';

export interface IUserGroupGetAll extends Pick<Group, 'id' | 'label'> {
	inlinePolicies: Pick<InlinePolicy, 'id' | 'label' | 'library'> & { rulesCount: number };
}
