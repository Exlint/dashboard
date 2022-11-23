import React from 'react';

import type { IConfigurationValue } from '@exlint-dashboard/common';
import EDInputField from '@/ui/EDInputField';
import EDConfigurationHeaderAndDescription from '@/ui/EDConfigurationHeaderAndDescription';

import type { IOption } from '@/ui/EDSelect/interfaces/option';

import classes from './EDDynamicArrayConfiguration.module.scss';
import InputConfiguration from './InputConfiguration';

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

const EDDynamicArrayConfigurationView = <T extends string | boolean | number>(
	props: React.PropsWithChildren<IProps>,
) => {
	return (
		<div className={classes['container']}>
			{props.configuration.map((item, i) => {
				const options: IOption<T>[] = [];

				if (item.type === 'select') {
					for (const value of item.values) {
						options.push({
							label: value.toString(),
							value: value as T,
						});
					}
				}

				return (
					<div key={i} className={classes['itemContainer']}>
						<EDConfigurationHeaderAndDescription
							title={item.title}
							description={item.description}
						/>
						<div className={classes['itemContainer__item']}>
							<EDInputField
								className={classes['container__inputBox']}
								value={props.inputState}
								placeholder={`Enter ${item.title}`}
								onChange={props.onInputChange}
							/>
							<InputConfiguration
								title={item.title}
								description={item.description}
								type={item.type}
								options={options}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

EDDynamicArrayConfigurationView.displayName = 'EDDynamicArrayConfigurationView';
EDDynamicArrayConfigurationView.defaultProps = {};

export default React.memo(EDDynamicArrayConfigurationView);
