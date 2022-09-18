import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import type { ISideBarGroup } from '../interfaces/group';

import SideBarView from './SideBar.view';

interface IProps {
	readonly groups: ISideBarGroup[];
}

const SideBar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const [searchInputState, setSearchInputState] = useState<string | null>(null);

	const filteredGroups = useMemo(() => {
		if (!searchInputState) {
			return props.groups;
		}

		return props.groups.filter((group) =>
			(group.label ?? t('groupCenter.defaultGroupName')).includes(searchInputState),
		);
	}, [props.groups, searchInputState]);

	const navigate = useNavigate();
	const location = useLocation();
	const isNewGroupButtonDisabled = location.pathname === '/group-center/new';

	const onSearchInputChange = (value: string) => setSearchInputState(() => value);

	const onNewButtonClick = () => navigate('/group-center/new');

	return (
		<SideBarView
			groups={filteredGroups}
			searchInput={searchInputState}
			isNewGroupButtonDisabled={isNewGroupButtonDisabled}
			onSearchInputChange={onSearchInputChange}
			onNewButtonClick={onNewButtonClick}
		/>
	);
};

SideBar.displayName = 'SideBar';
SideBar.defaultProps = {};

export default React.memo(SideBar);
