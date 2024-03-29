import type { ILibraryData } from '@exlint.io/common';
import type { InlinePolicy } from '@prisma/client';

export type IPolicy = Pick<InlinePolicy, 'id' | 'label' | 'library'> & Pick<ILibraryData, 'language'>;
