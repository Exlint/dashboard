import type { ILanguage } from '@exlint-dashboard/common';
import type { InlinePolicy } from '@prisma/client';

export type IGroupInlinePolicy = Pick<InlinePolicy, 'id' | 'label' | 'library'> & {
	readonly language: ILanguage;
};
