import type { PolicyLibrary } from '@prisma/client';

interface ILibraryRule {
	readonly description: string;
	readonly configApi: string;
	readonly hasAutoFix?: boolean;
	readonly category?: string;
}

interface IBaseConfiguration {
	readonly title: string | null;
	readonly description: string | null;
}

interface IBooleanConfiguration extends IBaseConfiguration {
	readonly type: 'boolean';
}

interface INumberConfiguration extends IBaseConfiguration {
	readonly type: 'number';
}

interface IStringConfiguration extends IBaseConfiguration {
	readonly type: 'string';
}

interface IMultiFreeConfiguration extends IBaseConfiguration {
	readonly type: 'multi-free';
	readonly values: string[];
}

interface ISelectConfiguration extends IBaseConfiguration {
	readonly type: 'select';
	readonly values: (number | string)[];
}

interface IDynamicSelectConfiguration extends IBaseConfiguration {
	readonly type: 'dynamic-select';
	readonly values: (boolean | string)[];
}

type IConfigurationValue =
	| IBooleanConfiguration
	| INumberConfiguration
	| IStringConfiguration
	| IMultiFreeConfiguration
	| ISelectConfiguration
	| IDynamicSelectConfiguration
	| IMultiConfiguration;

interface IMultiConfiguration extends IBaseConfiguration {
	readonly type: 'multi-configuration';
	readonly configuration: Record<string, IConfigurationValue>;
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
	readonly configuration: Record<string, IConfigurationValue>;
}
