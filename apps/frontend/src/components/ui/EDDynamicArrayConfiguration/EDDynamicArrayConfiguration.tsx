import React from 'react';

import EDDynamicArrayConfigurationView from './EDDynamicArrayConfiguration.view';

interface IProps<T extends string | boolean> {
	readonly configName: string;
	readonly title: string | null;
	readonly description: string | null;
	readonly type: 'string' | 'select';
	readonly values: T[];
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDDynamicArrayConfiguration = <T extends string | boolean>(
	props: React.PropsWithChildren<IProps<T>>,
) => {
	return (
		<EDDynamicArrayConfigurationView
			configName={props.configName}
			type={props.type}
			title={props.title}
			description={props.description}
			values={props.values}
			onChangeFormConfiguration={props.onChangeFormConfiguration}
		/>
	);
};

EDDynamicArrayConfiguration.displayName = 'EDDynamicArrayConfiguration';
EDDynamicArrayConfiguration.defaultProps = {};

export default React.memo(EDDynamicArrayConfiguration);
