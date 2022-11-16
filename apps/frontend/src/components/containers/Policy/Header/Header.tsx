import React from 'react';
import { useParams } from 'react-router-dom';
import type { PolicyLibrary } from '@prisma/client';

import HeaderView from './Header.view';

interface IProps {
	readonly groupLabel: string | null;
	readonly policyLabel: string | null;
	readonly library: PolicyLibrary | null;
	readonly hasRules: boolean;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const params = useParams<{ readonly groupId: string; readonly policyId: string }>();

	return (
		<HeaderView
			groupLabel={props.groupLabel}
			policyLabel={props.policyLabel}
			library={props.library}
			groupId={params.groupId!}
			policyId={params.policyId!}
			hasRules={props.hasRules}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
