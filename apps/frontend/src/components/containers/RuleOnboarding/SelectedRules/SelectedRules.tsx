import React, { useEffect, useState } from 'react';
import type { AxiosError } from 'axios';

import type { ILibraryRule } from '@/interfaces/libraries';
import { backendApi } from '@/utils/http';

import SelectedRulesView from './SelectedRules.view';

interface IProps {
	readonly selectedRule: ILibraryRule | null;
	readonly onEditRule: (rule: ILibraryRule) => void;
}

const SelectedRules: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedrulesState, setSelectedRulesState] = useState<ILibraryRule[] | null>(null);

	useEffect(() => {
		backendApi
			.post('/get-rules', {})
			.then((response) => {
				setSelectedRulesState(() => response.data);
			})
			.catch((err: AxiosError) => {
				alert(err.response?.data);
			});
	}, []);

	const onRemoveRule = () => {
		backendApi
			.post('/remove-rule', {
				rule: props.selectedRule?.ruleName,
			})
			.then()
			.catch((err: AxiosError) => {
				alert(err.response?.data);
			});
	};

	return (
		<SelectedRulesView
			selectedRules={selectedrulesState}
			selectedRule={props.selectedRule}
			onEditRule={props.onEditRule}
			onRemoveRule={onRemoveRule}
		/>
	);
};

SelectedRules.displayName = 'SelectedRules';
SelectedRules.defaultProps = {};

export default React.memo(SelectedRules);
