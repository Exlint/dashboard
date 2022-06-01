import React from 'react';

import SideBarFiltersView from './SideBarFilters.view';

interface IProps {}

const SideBarFilters: React.FC<IProps> = () => {
	return <SideBarFiltersView />;
};

SideBarFilters.displayName = 'SideBarFilters';
SideBarFilters.defaultProps = {};

export default React.memo(SideBarFilters);
