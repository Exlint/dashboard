import React from 'react';
import { useParams } from 'react-router-dom';
import type { PolicyLibrary } from '@prisma/client';

import HeaderView from './Header.view';

interface IProps {
	readonly complianceLabel: string | null;
	readonly policyLabel: string | null;
	readonly library: PolicyLibrary | null;
	readonly hasRules: boolean;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const params = useParams<{ readonly complianceId: string; readonly policyId: string }>();

	return (
		<HeaderView
			complianceLabel={props.complianceLabel}
			policyLabel={props.policyLabel}
			library={props.library}
			complianceId={params.complianceId!}
			policyId={params.policyId!}
			hasRules={props.hasRules}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
