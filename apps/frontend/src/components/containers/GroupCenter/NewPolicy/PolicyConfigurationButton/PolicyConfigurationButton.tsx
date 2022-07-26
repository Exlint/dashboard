import React from 'react';
import type { AxiosError } from 'axios';
// Import uniqid from 'uniqid';

import { backendApi } from '@/utils/http';
import type { ILibrary } from '@/interfaces/library';

import PolicyConfigurationButtonView from './PolicyConfigurationButton.view';

interface IProps {
	readonly selectedGroupId: string;
	readonly selectedLibrary: ILibrary | null;
	readonly policyLabelInput: string | null;
	readonly isButtonDisabled: boolean;
}

const PolicyConfigurationButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onCreateNewPolicy = () => {
		backendApi
			.post('/create-policy', { groupId: props.selectedGroupId, library: props.selectedLibrary })
			.then(() => {
				//TODO: should link to other url
			})
			.catch((err: AxiosError) => {
				//TODO: Add action when catch error
				alert(err.response?.data);
			});
	};

	return (
		<PolicyConfigurationButtonView
			isButtonDisabled={props.isButtonDisabled}
			onCreateNewPolicy={onCreateNewPolicy}
		/>
	);
};

PolicyConfigurationButton.displayName = 'PolicyConfigurationButton';
PolicyConfigurationButton.defaultProps = {};

export default React.memo(PolicyConfigurationButton);
