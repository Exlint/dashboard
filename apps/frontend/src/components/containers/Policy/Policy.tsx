import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { ILibraryName } from '@/interfaces/libraries';
import { backendApi } from '@/utils/http';

import type { IGetResponseData } from './interfaces/responses';

import PolicyView from './Policy.view';

interface IProps {}

const Policy: React.FC<IProps> = () => {
	const [groupLabelState, setGroupLabelState] = useState<string | null>(null);
	const [policyLabelState, setPolicyLabelState] = useState<string | null>(null);
	const [libraryState, setLibraryState] = useState<ILibraryName | null>(null);

	const params = useParams<{ readonly groupId: string; readonly policyId: string }>();
	const navigate = useNavigate();

	const onSetPolicyLabel = (value: string) => setPolicyLabelState(() => value);

	useEffect(() => {
		backendApi
			.get<IGetResponseData>(`/user/inline-policies/${params.policyId}`)
			.then((response) => {
				setGroupLabelState(() => response.data.groupLabel);
				setPolicyLabelState(() => response.data.policyLabel);
				setLibraryState(() => response.data.library);
			})
			.catch(() => navigate(`/group-center/${params.groupId}`));
	}, [backendApi, params.groupId, params.policyId]);

	return (
		<PolicyView
			groupLabel={groupLabelState}
			policyLabel={policyLabelState}
			library={libraryState}
			onSetPolicyLabel={onSetPolicyLabel}
		/>
	);
};

Policy.displayName = 'Policy';
Policy.defaultProps = {};

export default React.memo(Policy);
