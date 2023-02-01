import type { ILibraryRule } from '@exlint.io/common';

export interface ICategoryOption {
	readonly value: ILibraryRule['category'] | 'all';
	readonly label: string;
}
