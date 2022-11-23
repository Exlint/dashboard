import React, { useState } from 'react';

import type { IOption } from '@/ui/EDSelect/interfaces/option';

import InputConfigurationView from './InputConfiguration.view';

interface IProps<T> {
	readonly title: string | null;
	readonly description: string | null;
	readonly type: string;
	readonly options?: IOption<T>[];
}

const InputConfiguration = <T,>(props: React.PropsWithChildren<IProps<T>>) => {
	const [inputState, setInputState] = useState<string | null>(null);
	const [selectedSortIndexState, setSelectedSortIndexState] = useState<number>(0);

	const onInputChange = (value: string) => setInputState(() => value);

	const onSelectSortOption = (index: number) => setSelectedSortIndexState(() => index);

	return (
		<InputConfigurationView
			title={props.title}
			description={props.description}
			type={props.type}
			options={props.options}
			input={inputState}
			selectedSortIndex={selectedSortIndexState}
			onInputChange={onInputChange}
			onSelectSortOption={onSelectSortOption}
		/>
	);
};

InputConfiguration.displayName = 'InputConfiguration';
InputConfiguration.defaultProps = {};

export default React.memo(InputConfiguration);
