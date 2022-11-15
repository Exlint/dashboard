import React, { useState } from 'react';

import type { IConfigurationValue } from '@exlint-dashboard/common/dist/interfaces/libraries-data';

import EDMultiConfigurationView from './EDMultiConfiguration.view';

interface IProps {
	readonly configName: string;
	readonly nestedKeys: string[] | null;
	readonly title: string | null;
	readonly description: string | null;
	readonly configuration: Record<string, IConfigurationValue> | null;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
	readonly onChangeNestedkeys: (_: string | null) => void;
}

const EDMultiConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isNestedBodyVisibleState, setIsNestedBodyVisibleState] = useState<boolean>(false);

	const onToggleNestedBody = () => {
		setIsNestedBodyVisibleState((prevState) => !prevState);
	};

	return (
		<EDMultiConfigurationView
			configName={props.configName}
			nestedKeys={props.nestedKeys}
			title={props.title}
			description={props.description}
			configuration={props.configuration}
			isNestedBodyVisible={isNestedBodyVisibleState}
			onToggleNestedBody={onToggleNestedBody}
			onChangeFormConfiguration={props.onChangeFormConfiguration}
			onChangeNestedkeys={props.onChangeNestedkeys}
		/>
	);
};

EDMultiConfiguration.displayName = 'EDMultiConfiguration';
EDMultiConfiguration.defaultProps = {};

export default React.memo(EDMultiConfiguration);
