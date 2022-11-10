import React from 'react';

import EDBooleanView from './EDBoolean.view';

interface IProps {
	readonly title: string | null;
	readonly description: string | null;
}

const EDBoolean: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <EDBooleanView title={props.title} description={props.description} />;
};

EDBoolean.displayName = 'EDBoolean';
EDBoolean.defaultProps = {};

export default React.memo(EDBoolean);
