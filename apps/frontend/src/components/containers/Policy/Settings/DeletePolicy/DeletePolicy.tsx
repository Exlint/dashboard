import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import BackendService from '@/services/backend';

import DeletePolicyView from './DeletePolicy.view';

interface IProps {
	readonly policyLabel: string;
}

const DeletePolicy: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();
	const params = useParams<{ readonly complianceId: string; readonly policyId: string }>();

	const onDeletePolicyConfirmClick = async () => {
		await BackendService.delete(`/user/inline-policies/${params.policyId}`);

		navigate(`/compliance-center/${params.complianceId}`);
	};

	return (
		<DeletePolicyView
			policyLabel={props.policyLabel}
			onDeletePolicyConfirmClick={onDeletePolicyConfirmClick}
		/>
	);
};

DeletePolicy.displayName = 'DeletePolicy';
DeletePolicy.defaultProps = {};

export default React.memo(DeletePolicy);
