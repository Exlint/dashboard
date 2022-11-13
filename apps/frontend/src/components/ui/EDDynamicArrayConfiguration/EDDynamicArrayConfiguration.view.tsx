import React from 'react';

import type { IConfigurationValue } from '@exlint-dashboard/common';

import classes from './EDConfigurationsInputs.module.scss';

interface IProps {
	readonly configName: string;
	readonly title: string | null;
	readonly description: string | null;
	readonly configuration: IConfigurationValue[];
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDDynamicArrayConfigurationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <div className={classes['container']}>{props.title}</div>;
};

EDDynamicArrayConfigurationView.displayName = 'EDDynamicArrayConfigurationView';
EDDynamicArrayConfigurationView.defaultProps = {};

export default React.memo(EDDynamicArrayConfigurationView);
