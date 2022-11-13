import React from 'react';

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
	return (
		<EDDynamicArrayConfigurationView
			configName={props.configName}
			title={props.title}
			description={props.description}
			configuration={props.configuration}
			onChangeFormConfiguration={props.onChangeFormConfiguration}
		/>
	);
};

EDDynamicArrayConfiguration.displayName = 'EDDynamicArrayConfiguration';
EDDynamicArrayConfiguration.defaultProps = {};

export default React.memo(EDDynamicArrayConfiguration);
