import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { IGetPolicyResponseData } from '@exlint.io/common';
import type { PolicyLibrary } from '@prisma/client';

import BackendService from '@/services/backend';

import PolicyView from './Policy.view';

interface IProps {}

const Policy: React.FC<IProps> = () => {
	const [complianceLabelState, setComplianceLabelState] = useState<string | null>(null);
	const [policyLabelState, setPolicyLabelState] = useState<string | null>(null);
	const [libraryState, setLibraryState] = useState<PolicyLibrary | null>(null);
	const [hasRulesState, setHasRulesState] = useState<boolean | null>(null);

	const params = useParams<{ readonly complianceId: string; readonly policyId: string }>();
	const navigate = useNavigate();

	const onSetPolicyLabel = (value: string) => setPolicyLabelState(() => value);

	useEffect(() => {
		BackendService.get<IGetPolicyResponseData>(`/user/inline-policies/${params.policyId}`)
			.then((responseData) => {
				setComplianceLabelState(() => responseData.complianceLabel);
				setPolicyLabelState(() => responseData.label);
				setLibraryState(() => responseData.library);
				setHasRulesState(() => responseData.hasRules);
			})
			.catch(() => navigate(`/compliance-center/${params.complianceId}`));
	}, [params.complianceId, params.policyId]);

	return (
		<PolicyView
			complianceLabel={complianceLabelState}
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
