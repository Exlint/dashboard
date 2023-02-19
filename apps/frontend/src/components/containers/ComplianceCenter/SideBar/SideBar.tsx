import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { IGetAllCompliancesResponseData } from '@exlint.io/common';

import useBackend from '@/hooks/use-backend';

import SideBarView from './SideBar.view';

interface IProps {}

const SideBar: React.FC<IProps> = () => {
	const [searchInputState, setSearchInputState] = useState<string | null>(null);

	const { data: getAllCompliancesResponseData } =
		useBackend<IGetAllCompliancesResponseData>('/user/compliances');

	const filteredCompliances = useMemo(() => {
		if (!getAllCompliancesResponseData) {
			return [];
		}

		if (!searchInputState) {
			return getAllCompliancesResponseData.compliances;
		}

		return getAllCompliancesResponseData.compliances.filter((compliance) =>
			compliance.label.toLowerCase().includes(searchInputState.toLowerCase()),
		);
	}, [getAllCompliancesResponseData, searchInputState]);

	const navigate = useNavigate();
	const location = useLocation();
	const isNewComplianceButtonDisabled = location.pathname === '/compliance-center/new';

	const onSearchInputChange = (value: string) => setSearchInputState(() => value);

	const onNewButtonClick = () => navigate('/compliance-center/new');

	return (
		<SideBarView
			compliances={filteredCompliances}
			searchInput={searchInputState}
			isNewComplianceButtonDisabled={isNewComplianceButtonDisabled}
			onSearchInputChange={onSearchInputChange}
			onNewButtonClick={onNewButtonClick}
		/>
	);
};

SideBar.displayName = 'SideBar';
SideBar.defaultProps = {};

export default React.memo(SideBar);
