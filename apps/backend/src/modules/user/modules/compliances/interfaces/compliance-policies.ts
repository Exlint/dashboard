import type { ILanguage } from '@exlint.io/common';
import type { InlinePolicy } from '@prisma/client';

export type IComplianceInlinePolicy = Pick<InlinePolicy, 'id' | 'label' | 'library'> & {
	readonly language: ILanguage;
};
