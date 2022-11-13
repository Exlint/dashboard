import React, { useState } from 'react';

import type { IOption } from '@/ui/EDSelect/interfaces/option';

import EDMultiFreeView from './EDMultiFree.view';

interface IProps<T extends string | boolean> {
	readonly configName: string;
	readonly title: string | null;
	readonly description: string | null;
	readonly values: T[];
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDMultiFree = <T extends string | boolean>(props: React.PropsWithChildren<IProps<T>>) => {
	const [selectedValuesState, setSelectedValuesState] = useState<T[]>([]);

	const options: IOption<T>[] = [];

	for (const value of props.values) {
		options.push({
			label: value.toString(),
			value,
		});
	}

	const onAddValue = (value: T) => {
		setSelectedValuesState((prevState) => {
			if (prevState === null) {
				return [value];
			}

			return [...prevState, value];
		});

		props.onChangeFormConfiguration(props.configName, [...selectedValuesState, value]);
	};

	const onRemoveValue = (value: T) => {
		setSelectedValuesState((prevState) => {
			return prevState.filter((item) => item !== value);
		});

		props.onChangeFormConfiguration(
			props.configName,
			selectedValuesState.filter((item) => item !== value),
		);
	};

	return (
		<EDMultiFreeView
			title={props.title}
			description={props.description}
			options={options}
			selectedValues={selectedValuesState}
			onAddValue={onAddValue}
			onRemoveValue={onRemoveValue}
		/>
	);
};

EDMultiFree.displayName = 'EDMultiFree';
EDMultiFree.defaultProps = {};

export default React.memo(EDMultiFree);
