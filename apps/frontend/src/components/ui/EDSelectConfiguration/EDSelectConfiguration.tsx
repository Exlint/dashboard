import React, { useState } from 'react';

import type { IOption } from '@/ui/EDSelect/interfaces/option';

import EDSelectConfigurationView from './EDSelectConfiguration.view';

interface IProps<T extends string | boolean | number> {
	readonly keyConfig: string | undefined;
	readonly configName: string;
	readonly title: string | null;
	readonly description: string | null;
	readonly values: T[];
	readonly onChangeFormConfiguration: (_: string, __: unknown, subKey?: string) => void;
}

const EDSelectConfiguration = <T extends string | boolean | number>(
	props: React.PropsWithChildren<IProps<T>>,
) => {
	const [selectedSortIndexState, setSelectedSortIndexState] = useState<number>(0);

	const options: IOption<T>[] = [];

	for (const value of props.values) {
		options.push({
			label: value.toString(),
			value,
		});
	}

	const onSelectSortOption = (index: number) => {
		setSelectedSortIndexState(() => index);

		props.keyConfig
			? props.onChangeFormConfiguration(props.keyConfig, options[index]!.value, props.configName)
			: props.onChangeFormConfiguration(props.configName, options[index]!.value);
	};

	return (
		<EDSelectConfigurationView
			selectedSortIndex={selectedSortIndexState}
			title={props.title}
			description={props.description}
			options={options}
			onSelectSortOption={onSelectSortOption}
		/>
	);
};

EDSelectConfiguration.displayName = 'EDSelectConfiguration';
EDSelectConfiguration.defaultProps = {};

export default React.memo(EDSelectConfiguration);