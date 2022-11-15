import React, { useState } from 'react';

import type { IOption } from '@/ui/EDSelect/interfaces/option';

import InputConfigurationView from './InputConfiguration.view';

interface IProps<T> {
	readonly title: string | null;
	readonly options: IOption<T>[];
	readonly addedConfigurations: string[];
	readonly onAddConfiguratoin: (_: string | null, __: number) => void;
	readonly onRemoveConfigurations: (_: string) => void;
}

const InputConfiguration = <T,>(props: React.PropsWithChildren<IProps<T>>) => {
	const [inputState, setInputState] = useState<string | null>(null);
	const [selectedSortIndexState, setSelectedSortIndexState] = useState<number>(0);

	const onInputChange = (value: string) => setInputState(() => value);

	const onSelectSortOption = (index: number) => setSelectedSortIndexState(() => index);

	const onRemoveConfigurations = (value: string) => {
		props.onRemoveConfigurations(value);
		setInputState(() => null);
		setSelectedSortIndexState(() => 0);
	};

	return (
		<InputConfigurationView
			title={props.title}
			input={inputState}
			selectedSortIndex={selectedSortIndexState}
			options={props.options}
			addedConfigurations={props.addedConfigurations}
			onInputChange={onInputChange}
			onSelectSortOption={onSelectSortOption}
			onAddConfiguratoin={props.onAddConfiguratoin}
			onRemoveConfigurations={onRemoveConfigurations}
		/>
	);
};

InputConfiguration.displayName = 'InputConfiguration';
InputConfiguration.defaultProps = {};

export default React.memo(InputConfiguration);
