import React from 'react';

import ExternalActionView from './ExternalAction.view';

interface IProps {}

const ExternalAction: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <ExternalActionView>{props.children}</ExternalActionView>;
};

ExternalAction.displayName = 'ExternalAction';
ExternalAction.defaultProps = {};

export default React.memo(ExternalAction);
