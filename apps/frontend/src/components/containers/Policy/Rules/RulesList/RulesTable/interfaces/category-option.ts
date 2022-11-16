import type { ILibraryRule } from '@exlint-dashboard/common';

export interface ICategoryOption {
	readonly value: ILibraryRule['category'] | 'all';
	readonly label: string;
}
