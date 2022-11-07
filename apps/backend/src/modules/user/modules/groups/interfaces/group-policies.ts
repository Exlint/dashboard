import type { ILanguage } from '@exlint-dashboard/common';
import type { Group, InlinePolicy } from '@prisma/client';

export type IGroupInlinePolicy = Pick<InlinePolicy, 'id' | 'label' | 'library'> & {
	readonly language: ILanguage;
};

export interface IGroupInlinePolicies extends Pick<Group, 'description'> {
	count: number;
	inlinePolicies: IGroupInlinePolicy[];
}
