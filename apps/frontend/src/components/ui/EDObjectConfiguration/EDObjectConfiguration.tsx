import React, { useState } from 'react';

import type { IConfigurationValue } from '@exlint-dashboard/common/dist/interfaces/libraries-data';

import EDObjectConfigurationView from './EDObjectConfiguration.view';

interface IProps {
	readonly configName: string;
	readonly title: string | null;
	readonly description: string | null;
	readonly configuration: Record<string, IConfigurationValue> | null;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDObjectConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isNestedBodyVisibleState, setIsNestedBodyVisibleState] = useState<boolean>(false);

	const onToggleNestedBody = () => {
		setIsNestedBodyVisibleState((prevState) => !prevState);
	};

	return (
		<EDObjectConfigurationView
			configName={props.configName}
			title={props.title}
			description={props.description}
			configuration={props.configuration}
			isNestedBodyVisible={isNestedBodyVisibleState}
			onToggleNestedBody={onToggleNestedBody}
			onChangeFormConfiguration={props.onChangeFormConfiguration}
		/>
	);
};

EDObjectConfiguration.displayName = 'EDObjectConfiguration';
EDObjectConfiguration.defaultProps = {};

export default React.memo(EDObjectConfiguration);
