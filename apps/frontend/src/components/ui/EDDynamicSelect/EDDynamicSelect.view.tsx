import React from 'react';

import EDConfigurationHeaderAndDescription from '@/ui/EDConfigurationHeaderAndDescription';

import type { IOption } from '@/ui/EDSelect/interfaces/option';

import classes from './EDDynamicSelect.module.scss';
import InputConfiguration from './InputConfiguration';

interface IProps<T> {
	readonly title: string | null;
	readonly description: string | null;
	readonly options: IOption<T>[];
	readonly addedConfigurations: string[];
	readonly formConfigurations: Record<string, unknown>;
	readonly onAddConfiguratoin: (_: string | null, __: number) => void;
	readonly onRemoveConfigurations: (_: string) => void;
}

const EDDynamicSelectView = <T,>(props: React.PropsWithChildren<IProps<T>>) => {
	return (
		<div className={classes['container']}>
			<EDConfigurationHeaderAndDescription title={props.title} description={props.description} />
			<InputConfiguration
				title={props.title}
				options={props.options}
				addedConfigurations={props.addedConfigurations}
				onAddConfiguratoin={props.onAddConfiguratoin}
				onRemoveConfigurations={props.onRemoveConfigurations}
			/>

			{Object.keys(props.formConfigurations).map((_, i) => (
				<InputConfiguration
					key={i}
					title={props.title}
					options={props.options}
					addedConfigurations={props.addedConfigurations}
					onAddConfiguratoin={props.onAddConfiguratoin}
					onRemoveConfigurations={props.onRemoveConfigurations}
				/>
			))}
		</div>
	);
};

EDDynamicSelectView.displayName = 'EDDynamicSelectView';
EDDynamicSelectView.defaultProps = {};

export default React.memo(EDDynamicSelectView);
