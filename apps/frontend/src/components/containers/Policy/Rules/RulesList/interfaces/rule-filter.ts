import type { ILibraryRule } from '@exlint-dashboard/common';

export type IEnabledRuleFilter = 'all' | 'enabled' | 'notEnabled';

export interface ICategoryOption {
	readonly value: ILibraryRule['category'] | 'all';
	readonly label: string;
}
