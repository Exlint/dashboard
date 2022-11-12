import React, { useState } from 'react';

import EDMultiConfigurationView from './EDMultiConfiguration.view';

interface IProps {
	readonly configName: string;
	readonly title: string | null;
	readonly description: string | null;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDMultiConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedValuesState, setSelectedValuesState] = useState<string[] | null>(null);

	const onSelectValueChange = (value: string) => {
		setSelectedValuesState((prevState) => {
			if (prevState === null) {
				return [value];
			} else if (prevState.includes(value)) {
				return prevState.filter((item) => item !== value);
			}

			return [...prevState, value];
		});

		props.onChangeFormConfiguration(props.configName, selectedValuesState);
	};

	return (
		<EDMultiConfigurationView
			selectedValues={selectedValuesState}
			title={props.title}
			description={props.description}
			onSelectValueChange={onSelectValueChange}
		/>
	);
};

EDMultiConfiguration.displayName = 'EDMultiConfiguration';
EDMultiConfiguration.defaultProps = {};

export default React.memo(EDMultiConfiguration);
