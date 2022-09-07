import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { backendApi } from '@/utils/http';

import UserSettingsModalView from './PolicySidebarModal.view';

interface IProps {
	readonly policyId: string | undefined;
	readonly policyLabel: string;
	readonly onCloseModal: () => void;
}

const PolicySidebarModal: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const [isConfirmButtonDisabledState, setIsConfirmButtonDisabledState] = useState<boolean>(true);

	const onDeletePolicy = () => {
		console.log(props.policyId);

		backendApi.delete(`/user/inline-policies/${props.policyId}`).then(() => {
			navigate('/group-center');
		});
	};

	const onDeletePolicyInputChangeHandler = (input: string) => {
		setIsConfirmButtonDisabledState(() => input !== props.policyLabel.toUpperCase());
	};

	return (
		<UserSettingsModalView
			isConfirmButtonDisabled={isConfirmButtonDisabledState}
			policyLabel={props.policyLabel}
			onDeletePolicy={onDeletePolicy}
			onCloseModal={props.onCloseModal}
			onDeletePolicyInputChangeHandler={onDeletePolicyInputChangeHandler}
		/>
	);
};

PolicySidebarModal.displayName = 'PolicySidebarModal';
PolicySidebarModal.defaultProps = {};

export default React.memo(PolicySidebarModal);
