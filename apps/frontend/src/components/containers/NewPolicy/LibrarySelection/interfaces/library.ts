import type { ILibraryName } from '@/interfaces/libraries';

import type { ICategory, ILanguage, IType } from './type-filters';

export interface ILibrary {
	readonly name: ILibraryName;
	readonly author: string;
	readonly description: string;
	readonly types: IType[];
	readonly categories: ICategory[];
	readonly language: ILanguage;
}
