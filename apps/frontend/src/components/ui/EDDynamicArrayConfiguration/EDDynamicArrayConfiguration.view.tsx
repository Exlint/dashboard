import React from 'react';

import EDDynamicSelect from '@/ui/EDDynamicSelect';

import classes from './EDConfigurationsInputs.module.scss';

interface IProps<T extends string | boolean> {
	readonly configName: string;
	readonly type: 'string' | 'select';
	readonly title: string | null;
	readonly description: string | null;
	readonly values: T[];
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDDynamicArrayConfigurationView = <T extends string | boolean>(
	props: React.PropsWithChildren<IProps<T>>,
) => {
	const configuration =
		props.type === 'string' ? (
			<EDDynamicSelect
				configName={props.configName}
				title={props.title}
				description={props.description}
				values={props.values}
				onChangeFormConfiguration={props.onChangeFormConfiguration}
			/>
		) : null;

	return <div className={classes['container']}>{configuration}</div>;
};

EDDynamicArrayConfigurationView.displayName = 'EDDynamicArrayConfigurationView';
EDDynamicArrayConfigurationView.defaultProps = {};

export default React.memo(EDDynamicArrayConfigurationView);
