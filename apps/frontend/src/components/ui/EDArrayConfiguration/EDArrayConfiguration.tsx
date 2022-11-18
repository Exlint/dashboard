import React, { useState } from 'react';

import type { IConfigurationValue } from '@exlint-dashboard/common/dist/interfaces/libraries-data';

import EDArrayConfigurationView from './EDArrayConfiguration.view';

interface IProps {
	readonly configName: string;
	readonly title: string | null;
	readonly description: string | null;
	readonly configuration: IConfigurationValue[];
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDArrayConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isNestedBodyVisibleState, setIsNestedBodyVisibleState] = useState<boolean>(false);

	const onToggleNestedBody = () => {
		setIsNestedBodyVisibleState((prevState) => !prevState);
	};

	return (
		<EDArrayConfigurationView
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

EDArrayConfiguration.displayName = 'EDArrayConfiguration';
EDArrayConfiguration.defaultProps = {};

export default React.memo(EDArrayConfiguration);
