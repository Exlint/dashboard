import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import type { ILibraryData, ILibraryRule } from '@/interfaces/libraries';
import { librariesData } from '@/data/libraries-data';

import RuleOnboardingView from './RuleOnboarding.view';

interface IProps {}

const RuleOnboarding: React.FC<IProps> = () => {
	const [selectedLibraryState] = useState<ILibraryData | null>(librariesData.eslint);
	const [selectedRuleState, setSelectedRuleState] = useState<ILibraryRule | null>(null);
	// const [unselectedRulesState, setUnselectedRulesState] = useState<ILibraryRule | null>(null);
	const [selectedRuleAlertTypeIndexState, setSelectedRuleAlertTypeIndexState] = useState<number>(-1);
	const [isRuleOnUpdateState, setIsRuleOnUpdateState] = useState<boolean>(false);

	const { policyId } = useParams();

	const onSelectRule = (rule: ILibraryRule) => {
		if (!isRuleOnUpdateState) {
			setSelectedRuleAlertTypeIndexState(() => 0);
			setSelectedRuleState(() => rule);
		}
	};

	const onSelectedRuleAlertType = (index: number) => {
		setSelectedRuleAlertTypeIndexState(() => index);
	};

	const onEditRule = (rule: ILibraryRule) => {
		setIsRuleOnUpdateState(() => true);
		setSelectedRuleState(() => rule);
	};

	const onRemoveRule = () => {
		setSelectedRuleState(null);
		setSelectedRuleAlertTypeIndexState(() => -1);
		setIsRuleOnUpdateState(() => false);
	};

	useEffect(() => {}, [selectedLibraryState, selectedRuleState]);

	//TODO: useEffect on evry change policyId
	// setSelectedLibraryState(() => librariesData.eslint);

	return (
		<RuleOnboardingView
			policyId={policyId}
			selectedLibrary={selectedLibraryState}
			selectedRule={selectedRuleState}
			selectedRuleAlertTypeIndex={selectedRuleAlertTypeIndexState}
			isRuleOnUpdate={isRuleOnUpdateState}
			onSelectRule={onSelectRule}
			onEditRule={onEditRule}
			onRemoveRule={onRemoveRule}
			onSelectedRuleAlertType={onSelectedRuleAlertType}
		/>
	);
};

RuleOnboarding.displayName = 'RuleOnboarding';
RuleOnboarding.defaultProps = {};

export default React.memo(RuleOnboarding);
