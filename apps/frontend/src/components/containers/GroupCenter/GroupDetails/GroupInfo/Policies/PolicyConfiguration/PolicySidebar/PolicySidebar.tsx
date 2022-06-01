import React from 'react';

import { ILibrary } from '@/interfaces/library';

import PolicySidebarView from './PolicySidebar.view';

interface IProps {
	readonly selectedLibrary: ILibrary | null;
	readonly policyLabelInput: string | null;
}

const PolicySidebar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<PolicySidebarView
			selectedLibrary={props.selectedLibrary}
			policyLabelInput={props.policyLabelInput}
		/>
	);
};

PolicySidebar.displayName = 'PolicySidebar';
PolicySidebar.defaultProps = {};

export default React.memo(PolicySidebar);
