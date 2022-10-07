import type { Group, InlinePolicy } from '@prisma/client';

import type { ILanguage } from '@/interfaces/libraries-data';

export type IGroupInlinePolicy = Pick<InlinePolicy, 'id' | 'label' | 'library'> & {
	readonly language: ILanguage;
};

export interface IGroupInlinePolicies extends Pick<Group, 'description'> {
	count: number;
	inlinePolicies: IGroupInlinePolicy[];
}
