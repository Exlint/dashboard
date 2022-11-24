import type { PolicyLibrary } from '@prisma/client';
import type { ISchema } from './schema';

export interface ILibraryRule {
	readonly description: string;
	readonly hasAutofix: boolean;
	readonly category: string;
	// Configuration is temporarily optional. Need to revert back to required
	readonly configuration?: ISchema;
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
	readonly configuration: Record<string, ISchema>;
	readonly rules?: Record<string, ILibraryRule> | ISchema;
}
