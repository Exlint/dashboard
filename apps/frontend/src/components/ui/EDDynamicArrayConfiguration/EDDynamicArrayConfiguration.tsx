import React, { useState } from 'react';

import type { IConfigurationValue } from '@exlint-dashboard/common';

import EDDynamicArrayConfigurationView from './EDDynamicArrayConfiguration.view';

interface IProps {
	readonly configName: string;
	readonly title: string | null;
	readonly description: string | null;
	readonly configuration: IConfigurationValue[];
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDDynamicArrayConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [inputState, setInputState] = useState<string | null>(null);

	const [configurationState, setConfigurationState] = useState<Record<string, unknown>>({});

	const onInputChange = (value: string) => {
		setInputState(() => value);
	};

	const onChangeConfiguration = (name: string, value: unknown) => {
		setConfigurationState((prevState) => ({
			...prevState,
			[name]: value,
		}));

		props.onChangeFormConfiguration(props.configName, configurationState);
	};

	return (
		<EDDynamicArrayConfigurationView
			inputState={inputState}
			configName={props.configName}
			title={props.title}
			description={props.description}
			configuration={props.configuration}
			onInputChange={onInputChange}
			onChangeConfiguration={onChangeConfiguration}
			onChangeFormConfiguration={props.onChangeFormConfiguration}
		/>
	);
};

EDDynamicArrayConfiguration.displayName = 'EDDynamicArrayConfiguration';
EDDynamicArrayConfiguration.defaultProps = {};

export default React.memo(EDDynamicArrayConfiguration);
