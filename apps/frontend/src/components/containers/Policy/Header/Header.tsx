import React from 'react';

import type { ILibraryName } from '@/interfaces/libraries';

import HeaderView from './Header.view';

interface IProps {
	readonly groupLabel: string | null;
	readonly policyLabel: string | null;
	readonly library: ILibraryName | null;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<HeaderView groupLabel={props.groupLabel} policyLabel={props.policyLabel} library={props.library} />
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
