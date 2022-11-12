import React from 'react';

import EDConfigurationHeaderAndDescription from '@/ui/EDConfigurationHeaderAndDescription';

import classes from './EDMultiConfiguration.module.scss';

interface IProps {
	readonly selectedValues: string[] | null;
	readonly title: string | null;
	readonly description: string | null;
	readonly onSelectValueChange: (_: string) => void;
}

const EDMultiConfigurationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<EDConfigurationHeaderAndDescription title={props.title} description={props.description} />
		</section>
	);
};

EDMultiConfigurationView.displayName = 'EDMultiConfigurationView';
EDMultiConfigurationView.defaultProps = {};

export default React.memo(EDMultiConfigurationView);
