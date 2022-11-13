import React from 'react';

import type { ILibraryData } from '@exlint-dashboard/common';

import EDStringOrNumber from '@/ui/EDStringOrNumber';
import EDBoolean from '@/ui/EDBoolean';
import EDMultiFree from '@/ui/EDMultiFree';
import EDSelectConfiguration from '@/ui/EDSelectConfiguration';
import EDDynamicSelect from '@/ui/EDDynamicSelect';
import EDConfigurationHeaderAndDescription from '@/ui/EDConfigurationHeaderAndDescription';

import classes from './EDConfigurationsInputs.module.scss';

interface IProps {
	readonly formSchema?: ILibraryData['configuration'] | null;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
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
							configName={item[0]}
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
							configName={item[0]}
							title={item[1].title ?? item[0]}
							description={item[1].description}
							onChangeFormConfiguration={props.onChangeFormConfiguration}
						/>
						<hr className={classes['item__divider']} />
					</div>
				);
			}

			if (item[1].type === 'dynamic-select') {
				return (
					<div key={i} className={classes['item']}>
						<EDDynamicSelect
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

			if (item[1].type === 'select') {
				return (
					<div key={i} className={classes['item']}>
						<EDSelectConfiguration
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

			if (item[1].type === 'multi-configuration') {
				return (
					<div key={i} className={classes['multiConfigurations']}>
						<div className={classes['multiConfigurations__header']}>
							<EDConfigurationHeaderAndDescription
								title={item[1].title}
								description={item[1].description}
							/>
						</div>
						<div className={classes['multiConfigurations__body']}>
							<EDConfigurationsInputsView
								formSchema={item[1].configuration}
								onChangeFormConfiguration={props.onChangeFormConfiguration}
							/>
						</div>
					</div>
				);
			}

			if (item[1].type === 'array-configuration') {
				return (
					<div key={i} className={classes['multiConfigurations']}>
						<div className={classes['multiConfigurations__header']}>
							<EDConfigurationHeaderAndDescription
								title={item[1].title}
								description={item[1].description}
							/>
						</div>
						<div className={classes['multiConfigurations__body']}>
							<EDConfigurationsInputsView
								formSchema={Object.assign(item[1].configuration)}
								onChangeFormConfiguration={props.onChangeFormConfiguration}
							/>
						</div>
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
