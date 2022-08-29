import React, { useState } from 'react';

import { useClickOutside } from '@/hooks/click-outside';

import PolicySidebarView from './PolicySidebar.view';

interface IProps {
	readonly name: string;
	readonly createdAt: string;
	readonly policyLabel: string;
	readonly groupLabel: string;
}

const PolicySidebar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isModelOnViewState, setIsModelOnViewState] = useState<boolean>(false);

	const {
		ref: tooltopRef,
		isVisible: isTooltipVisible,
		toggleVisibility: toggleTooltipVisibility,
	} = useClickOutside<HTMLDivElement>(false);

	const onOpenModal = () => {
		toggleTooltipVisibility();
		setIsModelOnViewState(() => true);
	};

	const onCloseModal = () => setIsModelOnViewState(() => false);

	return (
		<PolicySidebarView
			name={props.name}
			createdAt={props.createdAt}
			policyLabel={props.policyLabel}
			groupLabel={props.groupLabel}
			isModelOnView={isModelOnViewState}
			tooltopRef={tooltopRef}
			isTooltipVisible={isTooltipVisible}
			toggleTooltipVisibility={toggleTooltipVisibility}
			onOpenModal={onOpenModal}
			onCloseModal={onCloseModal}
		/>
	);
};

PolicySidebar.displayName = 'PolicySidebar';
PolicySidebar.defaultProps = {};

export default React.memo(PolicySidebar);
