import type { Group, InlinePolicy, PolicyLibrary } from '@prisma/client';

export type IUserGroupInlinePolicy = Pick<InlinePolicy, 'id' | 'label' | 'library'> & { rulesCount: number };

export interface IUserGroupGetAll extends Pick<Group, 'id' | 'label'> {
	librariesNames: PolicyLibrary[];
}
