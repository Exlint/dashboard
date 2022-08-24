import React from 'react';
import type { AxiosError } from 'axios';

import type { IRule } from '@/interfaces/rule';

import { backendApi } from '@/utils/http';

import SelectedRulesView from './SelectedRules.view';

interface IProps {
	readonly selectedRulesList: IRule[] | null;
	readonly onEditRule: (_: string) => void;
}

const SelectedRules: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onRemoveRule = () => {
		backendApi
			.post('/remove-rule', {})
			.then()
			.catch((err: AxiosError) => {
				alert(err.response?.data);
			});
	};

	return (
		<SelectedRulesView
			selectedRulesList={props.selectedRulesList}
			onEditRule={props.onEditRule}
			onRemoveRule={onRemoveRule}
		/>
	);
};

SelectedRules.displayName = 'SelectedRules';
SelectedRules.defaultProps = {};

export default React.memo(SelectedRules);
