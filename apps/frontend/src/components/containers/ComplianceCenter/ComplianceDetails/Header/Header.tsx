import React from 'react';

import HeaderView from './Header.view';

interface IProps {
	readonly complianceLabel: string;
	readonly complianceId: string;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <HeaderView complianceLabel={props.complianceLabel} complianceId={props.complianceId} />;
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
