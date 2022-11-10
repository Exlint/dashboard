import React from 'react';

import EDStringView from './EDString.view';

interface IProps {
	readonly title: string | null;
	readonly description: string | null;
}

const EDString: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <EDStringView title={props.title} description={props.description} />;
};

EDString.displayName = 'EDString';
EDString.defaultProps = {};

export default React.memo(EDString);
