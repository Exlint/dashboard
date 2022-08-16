import type { ILibraryData } from '@/interfaces/libraries';

import { LibraryCategory } from '../models/library-category';
import { LibraryType } from '../models/library-type';

export const inflintData: ILibraryData = {
	name: 'Inflint',
	author: 'Tal Rofe',
	description: 'Inflint is a tool which scans and verifies file name conventions.',
	type: [LibraryType.Linters],
	category: [LibraryCategory.FileSystem],
};
