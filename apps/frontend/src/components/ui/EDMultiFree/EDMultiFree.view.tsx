import React from 'react';

import EDMultiSelect from '@/ui/EDMultiSelect';
import EDConfigurationHeaderAndDescription from '@/ui/EDConfigurationHeaderAndDescription';
import type { IOption } from '@/ui/EDSelect/interfaces/option';

import classes from './EDMultiFree.module.scss';

interface IProps<T> {
	readonly title: string | null;
	readonly description: string | null;
	readonly options: IOption<T>[];
	readonly selectedValues: T[] | null;
	readonly onAddValue: (_: T) => void;
	readonly onRemoveValue: (_: T) => void;
}

const EDMultiFreeView = <T,>(props: React.PropsWithChildren<IProps<T>>) => {
	return (
		<div className={classes['container']}>
			<EDConfigurationHeaderAndDescription title={props.title} description={props.description} />

			<div className={classes['container__select']}>
				<EDMultiSelect
					selectedValues={props.selectedValues}
					options={props.options}
					placeholder={`Select ${props.title}`}
					onSelect={props.onAddValue}
					onRemove={props.onRemoveValue}
				/>
			</div>
		</div>
	);
};

EDMultiFreeView.displayName = 'EDMultiFreeView';
EDMultiFreeView.defaultProps = {};

export default React.memo(EDMultiFreeView);
