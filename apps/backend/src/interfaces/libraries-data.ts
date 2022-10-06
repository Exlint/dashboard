import type { PolicyLibrary } from '@prisma/client';

interface ILibraryRule {
	readonly description: string;
	readonly configApi: string;
	readonly hasAutoFix?: boolean;
	readonly category?: string;
}

export type IType = 'Linters' | 'Formatters';

export type ICategory = 'Code' | 'File System' | 'Styles' | 'Dependencies';

export type ILanguage = 'JavaScript' | 'CSSHTML' | 'Agnostic';

export interface ILibraryData {
	readonly name: PolicyLibrary;
	readonly author: string;
	readonly description: string;
	readonly types: IType[];
	readonly categories: ICategory[];
	readonly language: ILanguage;
	readonly rules?: Record<string, ILibraryRule>;
}
