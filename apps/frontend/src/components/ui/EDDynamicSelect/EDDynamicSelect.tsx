import React, { useState } from 'react';

import type { IOption } from '@/ui/EDSelect/interfaces/option';

import EDDynamicSelectView from './EDDynamicSelect.view';

interface IProps<T extends string | boolean> {
	readonly configName: string;
	readonly title: string | null;
	readonly description: string | null;
	readonly values: T[];
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDDynamicSelect = <T extends string | boolean>(props: React.PropsWithChildren<IProps<T>>) => {
	const [addedConfigurationsState, setAddedConfigurationsState] = useState<string[]>([]);

	const [formConfigurationsState, setFormConfigurationsState] = useState<Record<string, string | boolean>>(
		{},
	);

	const options: IOption<T>[] = [];

	for (const value of props.values) {
		options.push({
			label: value.toString(),
			value,
		});
	}

	const onAddConfiguratoin = (input: string | null, sortIndex: number) => {
		const selectedValue = options[sortIndex] ? options[sortIndex]!.value : '';

		if (input !== null && selectedValue !== '') {
			setAddedConfigurationsState((prevState) => {
				if (prevState === null) {
					return [input];
				}

				return [...prevState, input];
			});

			setFormConfigurationsState((prevState) => ({
				...prevState,
				[input]: selectedValue,
			}));

			props.onChangeFormConfiguration(props.configName, {
				...formConfigurationsState,
				[input]: selectedValue,
			});
		}
	};

	const onRemoveConfigurations = (value: string) => {
		const newFormConfigurationsState = { ...formConfigurationsState };

		delete newFormConfigurationsState[value];

		setAddedConfigurationsState((prevState) => prevState.filter((item) => item !== value));

		setFormConfigurationsState(() => newFormConfigurationsState);

		props.onChangeFormConfiguration(props.configName, newFormConfigurationsState);
	};

	return (
		<EDDynamicSelectView
			title={props.title}
			description={props.description}
			options={options}
			addedConfigurations={addedConfigurationsState}
			formConfigurations={formConfigurationsState}
			onAddConfiguratoin={onAddConfiguratoin}
			onRemoveConfigurations={onRemoveConfigurations}
		/>
	);
};

EDDynamicSelect.displayName = 'EDDynamicSelect';
EDDynamicSelect.defaultProps = {};

export default React.memo(EDDynamicSelect);
