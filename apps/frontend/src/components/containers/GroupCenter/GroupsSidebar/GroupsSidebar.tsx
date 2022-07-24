import React, { useState } from 'react';

import { IGroup } from '@/interfaces/group';

import GroupsSidebarView from './GroupsSidebar.view';

interface IProps {
	readonly groupsList: IGroup[];
	readonly selectedGroupIndex: number | null;
	readonly onCreateNewGroup: () => void;
	readonly onSelectGroup: (index: number) => void;
}

const GroupsSidebar: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [searchGroupInputState, setSearchGroupInputState] = useState<string | null>(null);

	const onSearchGroupInput = (input: string) => {
		setSearchGroupInputState(() => input);
	};

	return (
		<GroupsSidebarView
			groupsList={props.groupsList}
			selectedGroupIndex={props.selectedGroupIndex}
			searchGroupInput={searchGroupInputState}
			onCreateNewGroup={props.onCreateNewGroup}
			onSelectGroup={props.onSelectGroup}
			onSearchGroupInput={onSearchGroupInput}
		/>
	);
};

GroupsSidebar.displayName = 'GroupsSidebar';
GroupsSidebar.defaultProps = {};

export default React.memo(GroupsSidebar);
