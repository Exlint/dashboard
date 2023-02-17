import type { PolicyLibrary } from '@prisma/client';
import React, { useEffect } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';

import RulesView from './Rules.view';

interface IProps {}

const Rules: React.FC<IProps> = () => {
	const [, , library, hasRules] = useOutletContext<[unknown, unknown, PolicyLibrary | null, boolean]>();
	const navigate = useNavigate();
	const params = useParams<{ readonly complianceId: string; readonly policyId: string }>();

	useEffect(() => {
		if (!hasRules) {
			navigate(`/compliance-center/${params.complianceId}/policies/${params.policyId}/configurations`, {
				replace: true,
			});
		}
	}, [hasRules]);

	return hasRules ? <RulesView library={library} /> : null;
};

Rules.displayName = 'Rules';
Rules.defaultProps = {};

export default React.memo(Rules);
