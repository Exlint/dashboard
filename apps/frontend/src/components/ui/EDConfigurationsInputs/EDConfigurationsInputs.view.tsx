import React from 'react';

import type { ILibraryData } from '@exlint-dashboard/common';

import EDStringOrNumber from '@/ui/EDStringOrNumber';
import EDBoolean from '@/ui/EDBoolean';
import EDMultiFree from '@/ui/EDMultiFree';
import EDSelectConfiguration from '@/ui/EDSelectConfiguration';
import EDObjectConfiguration from '@/ui/EDObjectConfiguration';
import EDArrayConfiguration from '@/ui/EDArrayConfiguration';
import EDDynamicArrayConfiguration from '@/ui/EDDynamicArrayConfiguration';

import classes from './EDConfigurationsInputs.module.scss';

interface IProps {
	readonly configName?: string;
	readonly formSchema?: ILibraryData['configuration'] | null;
	readonly isNestedBodyVisible?: boolean;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
	readonly onToggleNestedBody?: () => void;
}

const EDConfigurationsInputsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const configurationsOption =
		props.formSchema &&
		Object.entries(props.formSchema).map((item, i) => {
			if (item[1].type === 'string') {
				return (
					<div key={i} className={classes['item']}>
						<EDStringOrNumber
							type={item[1].type}
							configName={props.configName ? props.configName : item[0]}
							title={item[1].title}
							description={item[1].description}
							onChangeFormConfiguration={props.onChangeFormConfiguration}
						/>
						<hr className={classes['item__divider']} />
					</div>
				);
			}

			if (item[1].type === 'number') {
				return (
					<div key={i} className={classes['item']}>
						<EDStringOrNumber
							type={item[1].type}
							configName={item[0]}
							title={item[1].title}
							description={item[1].description}
							onChangeFormConfiguration={props.onChangeFormConfiguration}
						/>
						<hr className={classes['item__divider']} />
					</div>
				);
			}

			if (item[1].type === 'boolean') {
				return (
					<div key={i} className={classes['item']}>
						<EDBoolean
							keyConfig={props.configName}
							configName={item[0]}
							title={item[1].title ?? item[0]}
							description={item[1].description}
							onChangeFormConfiguration={props.onChangeFormConfiguration}
						/>
						<hr className={classes['item__divider']} />
					</div>
				);
			}

			if (item[1].type === 'select') {
				return (
					<div key={i} className={classes['item']}>
						<EDSelectConfiguration
							keyConfig={props.configName}
							configName={item[0]}
							title={item[1].title}
							description={item[1].description}
							values={item[1].values}
							onChangeFormConfiguration={props.onChangeFormConfiguration}
						/>
						<hr className={classes['item__divider']} />
					</div>
				);
			}

			if (item[1].type === 'multi-free') {
				return (
					<div key={i} className={classes['item']}>
						<EDMultiFree
							configName={item[0]}
							title={item[1].title}
							description={item[1].description}
							values={item[1].values}
							onChangeFormConfiguration={props.onChangeFormConfiguration}
						/>
						<hr className={classes['item__divider']} />
					</div>
				);
			}

			if (item[1].type === 'object-configuration') {
				return (
					<EDObjectConfiguration
						key={i}
						configName={item[0]}
						title={item[1].title}
						description={item[1].description}
						configuration={item[1].configuration}
						onChangeFormConfiguration={props.onChangeFormConfiguration}
					/>
				);
			}

			if (item[1].type === 'array-configuration') {
				return (
					<EDArrayConfiguration
						key={i}
						configName={item[0]}
						title={item[1].title}
						description={item[1].description}
						configuration={item[1].configuration}
						onChangeFormConfiguration={props.onChangeFormConfiguration}
					/>
				);
			}

			if (item[1].type === 'dynamic-array-configuration') {
				return (
					<div key={i} className={classes['item']}>
						<EDDynamicArrayConfiguration
							configName={item[0]}
							title={item[1].title}
							description={item[1].description}
							configuration={item[1].configuration}
							onChangeFormConfiguration={props.onChangeFormConfiguration}
						/>
						<hr className={classes['item__divider']} />
					</div>
				);
			}

			return null;
		});

	return <div>{configurationsOption}</div>;
};

EDConfigurationsInputsView.displayName = 'EDConfigurationsInputsView';
EDConfigurationsInputsView.defaultProps = {};

export default React.memo(EDConfigurationsInputsView);
