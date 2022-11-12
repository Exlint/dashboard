import React from 'react';

import classes from './EDConfigurationHeaderAndDescription.module.scss';

interface IProps {
	readonly title: string | null;
	readonly description: string | null;
}

const EDConfigurationHeaderAndDescriptionView: React.FC<IProps> = (
	props: React.PropsWithChildren<IProps>,
) => {
	return (
		<>
			<span className={classes['title']}>{props.title}</span>
			<span className={classes['description']}>{props.description}</span>
		</>
	);
};

EDConfigurationHeaderAndDescriptionView.displayName = 'EDConfigurationHeaderAndDescriptionView';
EDConfigurationHeaderAndDescriptionView.defaultProps = {};

export default React.memo(EDConfigurationHeaderAndDescriptionView);
