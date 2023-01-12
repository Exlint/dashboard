import type { PolicyLibrary } from '@prisma/client';
import type { RJSFSchema } from '@rjsf/utils';

export interface ILibraryRule {
	readonly description: string;
	readonly hasAutofix: boolean;
	readonly category: string;
	readonly schema?: RJSFSchema;
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
	readonly configuration: RJSFSchema;
	readonly rules?: Record<string, ILibraryRule>;
}
