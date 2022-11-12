import React from 'react';

import EDConfigurationHeaderAndDescriptionView from './EDConfigurationHeaderAndDescription.view';

interface IProps {
	readonly title: string | null;
	readonly description: string | null;
}

const EDConfigurationHeaderAndDescription: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <EDConfigurationHeaderAndDescriptionView title={props.title} description={props.description} />;
};

EDConfigurationHeaderAndDescription.displayName = 'EDConfigurationHeaderAndDescription';
EDConfigurationHeaderAndDescription.defaultProps = {};

export default React.memo(EDConfigurationHeaderAndDescription);
