import React from 'react';

import EDConfigurationHeaderAndDescription from '@/ui/EDConfigurationHeaderAndDescription';
import EDSelect from '@/ui/EDSelect';
import type { IOption } from '@/ui/EDSelect/interfaces/option';

import classes from './EDSelectConfiguration.module.scss';

interface IProps<T> {
	readonly selectedSortIndex: number;
	readonly title: string | null;
	readonly description: string | null;
	readonly options: IOption<T>[];
	readonly onSelectSortOption: (_: number) => void;
}

const EDSelectConfigurationView = <T,>(props: React.PropsWithChildren<IProps<T>>) => {
	return (
		<div className={classes['container']}>
			<EDConfigurationHeaderAndDescription title={props.title} description={props.description} />
			<EDSelect
				className={classes['container__select']}
				selectedIndex={props.selectedSortIndex}
				options={props.options}
				onSelect={props.onSelectSortOption}
			/>
		</div>
	);
};

EDSelectConfigurationView.displayName = 'EDSelectConfigurationView';
EDSelectConfigurationView.defaultProps = {};

export default React.memo(EDSelectConfigurationView);
