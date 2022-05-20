import React, { useState } from 'react';

import GroupsSlidebarView from './GroupsSlidebar.view';

interface IProps {}

const GroupsSlidebar: React.FC<IProps> = () => {
	const [groupsList, setGroupsList] = useState<{ title: string; id: number; policies: number[] }[]>([]);

	const onCreateNewGroup = () => {
		setGroupsList([...groupsList, { title: 'Group Label', id: Math.random(), policies: [1, 2, 3, 4] }]);
	};

	return <GroupsSlidebarView onCreateNewGroup={onCreateNewGroup} groupsList={groupsList} />;
};

GroupsSlidebar.displayName = 'GroupsSlidebar';
GroupsSlidebar.defaultProps = {};

export default React.memo(GroupsSlidebar);
