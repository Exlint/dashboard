import React, { type ReactNode } from 'react';

import ExternalActionView from './ExternalAction.view';

interface IProps {
	readonly className?: string;
	readonly children?: ReactNode;
}

const ExternalAction: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <ExternalActionView className={props.className}>{props.children}</ExternalActionView>;
};

ExternalAction.displayName = 'ExternalAction';
ExternalAction.defaultProps = {};

export default React.memo(ExternalAction);
