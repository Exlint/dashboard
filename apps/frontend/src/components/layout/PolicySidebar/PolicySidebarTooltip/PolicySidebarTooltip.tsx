import React from 'react';
import { connect } from 'react-redux';

import { authActions } from '@/store/reducers/auth';

import PolicySidebarTooltipView from './PolicySidebarTooltip.view';

interface IProps {
	readonly tooltipRef: React.RefObject<HTMLDivElement>;
	readonly onOpenModal: () => void;
}

const PolicySidebarTooltip: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <PolicySidebarTooltipView tooltipRef={props.tooltipRef} onOpenModal={props.onOpenModal} />;
};

PolicySidebarTooltip.displayName = 'PolicySidebarTooltip';
PolicySidebarTooltip.defaultProps = {};

export default connect(null, {
	setUnauthenticated: authActions.setUnauthenticated,
})(React.memo(PolicySidebarTooltip));
