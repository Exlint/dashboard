import React from 'react';

import EDInputField from '@/ui/EDInputField';
import EDSelect from '@/ui/EDSelect';

import type { IOption } from '@/ui/EDSelect/interfaces/option';

import classes from './InputConfiguration.module.scss';

interface IProps<T> {
	readonly title: string | null;
	readonly description: string | null;
	readonly type: string;
	readonly input: string | null;
	readonly selectedSortIndex: number;
	readonly options?: IOption<T>[];
	readonly onInputChange: (_: string) => void;
	readonly onSelectSortOption: (_: number) => void;
}

const InputConfigurationView = <T,>(props: React.PropsWithChildren<IProps<T>>) => {
	return (
		<div className={classes['container']}>
			{props.type === 'string' ? (
				<EDInputField
					className={classes['container__inputBox']}
					value={props.input}
					placeholder={`Enter ${props.title}`}
					onChange={props.onInputChange}
				/>
			) : (
				<div style={{ height: '100%' }}>
					<EDSelect
						selectedIndex={props.selectedSortIndex}
						options={props.options ?? []}
						onSelect={props.onSelectSortOption}
					/>
				</div>
			)}
		</div>
	);
};

InputConfigurationView.displayName = 'InputConfigurationView';
InputConfigurationView.defaultProps = {};

export default React.memo(InputConfigurationView);
