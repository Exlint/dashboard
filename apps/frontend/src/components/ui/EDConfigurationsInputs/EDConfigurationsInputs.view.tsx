import React from 'react';

import type { ILibraryData } from '@exlint-dashboard/common';

import EDBoolean from '@/ui/EDBoolean';
import EDMultiFree from '@/ui/EDMultiFree';
import EDString from '@/ui/EDString';
import EDMultiConfiguration from '@/ui//EDMultiConfiguration';
import EDDynamicSelect from '@/ui/EDDynamicSelect';

import classes from './EDConfigurationsInputs.module.scss';

interface IProps {
	readonly formSchema: ILibraryData['configuration'] | null;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDConfigurationsInputsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const configurationsOption =
		props.formSchema &&
		Object.entries(props.formSchema).map((item, i) => {
			if (item[1].type === 'string') {
				return (
					<div key={i} className={classes['']}>
						<EDString
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
							title={item[1].title}
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

			if (item[1].type === 'multi-free') {
				return (
					<div key={i} className={classes['item']}>
						<EDMultiFree
							configName={item[0]}
							title={item[1].title}
							description={item[1].description}
							onChangeFormConfiguration={props.onChangeFormConfiguration}
						/>
						<hr className={classes['item__divider']} />
					</div>
				);
			}

			if (item[1].type === 'multi-configuration') {
				return (
					<div key={i} className={classes['item']}>
						<EDMultiConfiguration
							configName={item[0]}
							title={item[1].title}
							description={item[1].description}
							onChangeFormConfiguration={props.onChangeFormConfiguration}
						/>
						<hr className={classes['item__divider']} />
					</div>
				);
			}

			return null;
		});

	return (
		<section className={classes['container']}>
			<div className={classes['innerConfig']}>{configurationsOption}</div>
		</section>
	);
};

EDConfigurationsInputsView.displayName = 'EDConfigurationsInputsView';
EDConfigurationsInputsView.defaultProps = {};

export default React.memo(EDConfigurationsInputsView);
