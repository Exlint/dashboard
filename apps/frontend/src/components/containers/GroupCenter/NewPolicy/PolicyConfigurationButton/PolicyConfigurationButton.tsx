import React from 'react';
import { AxiosError } from 'axios';
// import uniqid from 'uniqid';

// import { currentDate } from '@/utils/currentDate';
import { backendApiAxios } from '@/utils/http';
import { ILibrary } from '@/interfaces/library';

import PolicyConfigurationButtonView from './PolicyConfigurationButton.view';

interface IProps {
	readonly selectedGroupId: string;
	readonly selectedLibrary: ILibrary | null;
	readonly policyLabelInput: string | null;
	readonly isButtonDisabled: boolean;
}

const PolicyConfigurationButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const onCreateNewPolicy = () => {
		backendApiAxios
			.post('/create-policy', { groupId: props.selectedGroupId, library: props.selectedLibrary })
			.then(() => {
				//TODO: should link to other url
			})
			.catch((err: AxiosError) => {
				//TODO: Add action when catch error
				alert(err.response?.data);
			});
	};

	// const onCreateNewPolicy = () => {
	// 	props.addPolicy(props.selectedGroup?.id || '', {
	// 		id: uniqid(),
	// 		label: props.policyLabelInput || '',
	// 		createdAt: currentDate(),
	// 		libraryName: '',
	// 		rules: null,
	// 	});
	// };

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
