import type { ILibraryData } from '@/interfaces/libraries';

import { LibraryCategory } from '../models/library-category';
import { LibraryType } from '../models/library-type';

export const depcheckData: ILibraryData = {
	name: 'Depcheck',
	author: 'Djordje Lukic, Junle Li',
	description: 'Check your npm module for unused dependencies.',
	type: [LibraryType.Linters],
	category: [LibraryCategory.Dependencies],
};
