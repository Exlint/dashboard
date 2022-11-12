import React from 'react';

import EDInputField from '@/ui/EDInputField';
import EDSelect from '@/ui/EDSelect';
import EDSvg from '@/ui/EDSvg';

import type { IOption } from '@/ui/EDSelect/interfaces/option';

import classes from './InputConfiguration.module.scss';

interface IProps<T> {
	readonly title: string | null;
	readonly input: string | null;
	readonly selectedSortIndex: number;
	readonly options: IOption<T>[];
	readonly addedConfigurations: string[];
	readonly onInputChange: (_: string) => void;
	readonly onSelectSortOption: (_: number) => void;
	readonly onAddConfiguratoin: (_: string | null, __: number) => void;
	readonly onRemoveConfigurations: (_: string) => void;
}

const InputConfigurationView = <T,>(props: React.PropsWithChildren<IProps<T>>) => {
	const addOrRemoveButton =
		!props.addedConfigurations.includes(props.input ?? '') || props.addedConfigurations.length === 0 ? (
			<button
				className={classes['innerButtons']}
				type="button"
				onClick={() => props.onAddConfiguratoin(props.input, props.selectedSortIndex)}
			>
				<EDSvg className={classes['innerButtons__button']} name="circleAddFilled" />
			</button>
		) : (
			<button
				className={classes['innerButtons']}
				type="button"
				onClick={() => props.onRemoveConfigurations(props.input ?? '')}
			>
				<EDSvg className={classes['innerButtons__button']} name="circleRemove" />
			</button>
		);

	return (
		<div className={classes['container']}>
			<EDInputField
				className={classes['container__inputBox']}
				value={props.input}
				placeholder={`Enter ${props.title}`}
				disabled={props.addedConfigurations.includes(props.input ?? '')}
				onChange={props.onInputChange}
			/>
			<EDSelect
				selectedIndex={props.selectedSortIndex}
				options={props.options}
				disabled={props.addedConfigurations.includes(props.input ?? '')}
				onSelect={props.onSelectSortOption}
			/>
			{addOrRemoveButton}
		</div>
	);
};

InputConfigurationView.displayName = 'InputConfigurationView';
InputConfigurationView.defaultProps = {};

export default React.memo(InputConfigurationView);
