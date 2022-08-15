import React from 'react';

import PolicySidebarBodyView from './PolicySidebarBody.view';

interface IProps {
	readonly createdAt: string;
	readonly library: string;
	readonly type: string;
	readonly category: string;
	readonly rules: string;
	readonly policyLabel: string;
	readonly isModelOnView: boolean;
	readonly tooltipRef: React.RefObject<HTMLDivElement>;
	readonly isTooltipVisible: boolean;
	readonly toggleTooltipVisibility: () => void;
	readonly onOpenModal: () => void;
	readonly onCloseModal: () => void;
}

const PolicySidebarBody: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<PolicySidebarBodyView
			createdAt={props.createdAt}
			library={props.library}
			type={props.type}
			category={props.category}
			rules={props.rules}
			policyLabel={props.policyLabel}
			isModelOnView={props.isModelOnView}
			tooltipRef={props.tooltipRef}
			isTooltipVisible={props.isTooltipVisible}
			toggleTooltipVisibility={props.toggleTooltipVisibility}
			onOpenModal={props.onOpenModal}
			onCloseModal={props.onCloseModal}
		/>
	);
};

PolicySidebarBody.displayName = 'PolicySidebarBody';
PolicySidebarBody.defaultProps = {};

export default React.memo(PolicySidebarBody);
