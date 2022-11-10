import React from 'react';

import EDMultiFreeView from './EDMultiFree.view';

interface IProps {
	readonly title: string | null;
	readonly description: string | null;
}

const EDMultiFree: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <EDMultiFreeView title={props.title} description={props.description} />;
};

EDMultiFree.displayName = 'EDMultiFree';
EDMultiFree.defaultProps = {};

export default React.memo(EDMultiFree);
