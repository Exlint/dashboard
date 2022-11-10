import React from 'react';

import type { ILibraryData } from '@exlint-dashboard/common';
import EDBoolean from '@/ui/EDBoolean';
import EDMultiFree from '@/ui/EDMultiFree';
import EDString from '@/ui/EDString';

import classes from './EDConfigurationsInputs.module.scss';

interface IProps {
	readonly formSchema: ILibraryData['configuration'] | null;
}

const EDConfigurationsInputsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<div className={classes['innerConfig']}>
				{props.formSchema
					? Object.values(props.formSchema).map((item, i) => (
							<div key={i} className={classes['item']}>
								{item.type === 'string' ? (
									<EDString title={item.title} description={item.description} />
								) : item.type === 'boolean' ? (
									<EDBoolean title={item.title} description={item.description} />
								) : item.type === 'multi-free' ? (
									<EDMultiFree title={item.title} description={item.description} />
								) : null}
								<hr className={classes['item__divider']} />
							</div>
					  ))
					: null}
				<hr className={classes['innerConfig_divider']} />
			</div>
		</section>
	);
};

EDConfigurationsInputsView.displayName = 'EDConfigurationsInputsView';
EDConfigurationsInputsView.defaultProps = {};

export default React.memo(EDConfigurationsInputsView);
