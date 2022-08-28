import type { LibraryCategory } from '../models/library-category';
import type { LibraryType } from '../models/library-type';

export interface ILibraryRule {
	ruleName?: string;
	readonly description: string;
	readonly configApi?: string;
	readonly hasAutoFix?: boolean;
	readonly category?: string;
}

export interface ILibraryData {
	readonly name: 'ESLint' | 'Stylelint' | 'Depcheck' | 'Prettier' | 'Inflint';
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

export interface IPolicyData {
	readonly id: string;
	readonly libraryName: string;
	readonly label: string;
	readonly category: string;
	// eslint-disable-next-line @typescript-eslint/ban-types
	readonly rules: Record<string, ILibraryRule> | {};
}
