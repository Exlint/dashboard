import type { LibraryCategory } from '../models/library-category';
import type { LibraryType } from '../models/library-type';

interface ILibraryRule {
	readonly description: string;
	readonly configApi: string;
	readonly hasAutoFix?: boolean;
	readonly category?: string;
}

export interface ILibraryData {
	readonly name: string;
	readonly author: string;
	readonly description: string;
	readonly type: LibraryType[];
	readonly category: LibraryCategory[];
	readonly rules?: Record<string, ILibraryRule>;
}

export interface ILbirariesData {
	readonly eslint: ILibraryData;
	readonly depcheck: ILibraryData;
	readonly inflint: ILibraryData;
	readonly prettier: ILibraryData;
	readonly stylelint: ILibraryData;
}
