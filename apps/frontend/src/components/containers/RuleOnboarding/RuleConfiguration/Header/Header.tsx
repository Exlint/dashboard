import React from 'react';
import type { AxiosError } from 'axios';

import type { IRule } from '@/interfaces/rule';
import { ruleAlertTypes } from '@/data/rule-alert-types';
import { backendApi } from '@/utils/http';

import HeaderView from './Header.view';

interface IProps {
	readonly policyId: string | undefined;
	readonly selectedRule: IRule | null;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly selectedRuleAlertTypeIndex: number;
	readonly isRuleOnUpdate: boolean;
	readonly onUpdateSelectedRulesList: (_: IRule) => void;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const selectedRuleType = ruleAlertTypes[props.selectedRuleAlertTypeIndex];

	const selectedRule: Record<string, string> = {};

	selectedRule['rule'] = JSON.stringify({ [props.selectedRule?.ruleName ?? '']: selectedRuleType });

	const onAddRuleToList = () => {
		props.onUpdateSelectedRulesList(props.selectedRule!);

		backendApi
			.post(`/user/inline-policies/add-rule/${props.policyId}`, { selectedRule })
			.then(() => props.onUpdateSelectedRulesList(props.selectedRule!))
			.catch((e) => console.log(e, 'JOZEF'));
	};

	const onUpdateRule = () => {
		backendApi
			.patch(`/user/inline-policies/edit-rule/${props.policyId}`, {})
			.then((response) => {
				alert(response);
			})
			.catch((err: AxiosError) => {
				alert(err.response?.data);
			});
	};

	return (
		<HeaderView
			selectedRule={props.selectedRule}
			isRuleOnUpdate={props.isRuleOnUpdate}
			onAddRuleToList={onAddRuleToList}
			onUpdateRule={onUpdateRule}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
