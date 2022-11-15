import React from 'react';

import type { IConfigurationValue } from '@exlint-dashboard/common';
import EDInputField from '@/ui/EDInputField';

import EDConfigurationHeaderAndDescription from '@/ui/EDConfigurationHeaderAndDescription';

import classes from './EDDynamicArrayConfiguration.module.scss';

interface IProps {
	readonly inputState: string | null;
	readonly configName: string;
	readonly title: string | null;
	readonly description: string | null;
	readonly configuration: IConfigurationValue[];
	readonly onInputChange: (_: string) => void;
	readonly onChangeConfiguration: (_: string, __: unknown) => void;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDDynamicArrayConfigurationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			{props.configuration.map((item, i) => {
				return (
					<div key={i}>
						<EDConfigurationHeaderAndDescription
							title={item.title}
							description={item.description}
						/>
						<EDInputField
							className={classes['container__inputBox']}
							value={props.inputState}
							placeholder={`Enter ${item.title}`}
							onChange={props.onInputChange}
						/>
					</div>
				);
			})}
		</div>
	);
};

EDDynamicArrayConfigurationView.displayName = 'EDDynamicArrayConfigurationView';
EDDynamicArrayConfigurationView.defaultProps = {};

export default React.memo(EDDynamicArrayConfigurationView);
