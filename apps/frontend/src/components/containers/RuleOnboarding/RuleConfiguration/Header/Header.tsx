import React from 'react';
import type { AxiosError } from 'axios';

import type { ILibraryRule } from '@/interfaces/libraries';
// Import { ruleAlertTypes } from '@/data/rule-alert-types';
import { backendApi } from '@/utils/http';

import HeaderView from './Header.view';

interface IProps {
	readonly selectedRule: ILibraryRule | null;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly selectedRuleAlertTypeIndex: number;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// Const selectedRuleType = [ruleAlertTypes[props.selectedRuleAlertTypeIndex]];

	const onAddRuleToList = () => {
		backendApi
			.post('/add-rule', {})
			.then((response) => {
				alert(response);
			})
			.catch((err: AxiosError) => {
				alert(err.response?.data);
			});
	};

	const onUpdateRule = () => {
		backendApi
			.post('/edit-rule', {})
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
			onAddRuleToList={onAddRuleToList}
			onUpdateRule={onUpdateRule}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
