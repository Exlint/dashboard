import React, { useState } from 'react';
import { connect } from 'react-redux';

import type { AppState } from '@/store/app';
import { useClickOutside } from '@/hooks/click-outside';

import SettingsSidebarView from './PolicySidebar.view';

interface IProps {
	readonly name: string;
	readonly createdAt: string;
	readonly library: string;
	readonly type: string;
	readonly category: string;
	readonly rules: string;
	readonly policyLabel: string;
	readonly groupLabel: string;
}

const PolicySidebar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isModelOnViewState, setIsModelOnViewState] = useState<boolean>(false);

	const {
		ref: tooltipRef,
		isVisible: isTooltipVisible,
		toggleVisibility: toggleTooltipVisibility,
	} = useClickOutside<HTMLDivElement>(false);

	const onOpenModal = () => {
		toggleTooltipVisibility();
		setIsModelOnViewState(() => true);
	};

	const onCloseModal = () => setIsModelOnViewState(() => false);

	return (
		<SettingsSidebarView
			name={props.name}
			createdAt={props.createdAt}
			library={props.library}
			type={props.type}
			category={props.category}
			rules={props.rules}
			policyLabel={props.policyLabel}
			groupLabel={props.groupLabel}
			isModelOnView={isModelOnViewState}
			tooltipRef={tooltipRef}
			isTooltipVisible={isTooltipVisible}
			toggleTooltipVisibility={toggleTooltipVisibility}
			onOpenModal={onOpenModal}
			onCloseModal={onCloseModal}
		/>
	);
};

PolicySidebar.displayName = 'PolicySidebar';
PolicySidebar.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		name: state.auth.name!,
	};
};

export default connect(mapStateToProps)(React.memo(PolicySidebar));
