import type { ILanguage } from '@exlint.io/common';
import type { InlinePolicy } from '@prisma/client';

export type IGroupInlinePolicy = Pick<InlinePolicy, 'id' | 'label' | 'library'> & {
	readonly language: ILanguage;
};
