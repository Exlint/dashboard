import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { IGetPolicyResponseData } from '@exlint-dashboard/common';
import type { PolicyLibrary } from '@prisma/client';

import { backendApi } from '@/utils/http';

import PolicyView from './Policy.view';

interface IProps {}

const Policy: React.FC<IProps> = () => {
	const [groupLabelState, setGroupLabelState] = useState<string | null>(null);
	const [policyLabelState, setPolicyLabelState] = useState<string | null>(null);
	const [libraryState, setLibraryState] = useState<PolicyLibrary | null>(null);
	const [hasRulesState, setHasRulesState] = useState<boolean | null>(null);

	const params = useParams<{ readonly groupId: string; readonly policyId: string }>();
	const navigate = useNavigate();

	const onSetPolicyLabel = (value: string) => setPolicyLabelState(() => value);

	useEffect(() => {
		backendApi
			.get<IGetPolicyResponseData>(`/user/inline-policies/${params.policyId}`)
			.then((response) => {
				setGroupLabelState(() => response.data.groupLabel);
				setPolicyLabelState(() => response.data.label);
				setLibraryState(() => response.data.library);
				setHasRulesState(() => response.data.hasRules);
			})
			.catch(() => navigate(`/group-center/${params.groupId}`));
	}, [backendApi, params.groupId, params.policyId]);

	return (
		<PolicyView
			groupLabel={groupLabelState}
			policyLabel={policyLabelState}
			library={libraryState}
			hasRules={hasRulesState}
			onSetPolicyLabel={onSetPolicyLabel}
		/>
	);
};

Policy.displayName = 'Policy';
Policy.defaultProps = {};

export default React.memo(Policy);
