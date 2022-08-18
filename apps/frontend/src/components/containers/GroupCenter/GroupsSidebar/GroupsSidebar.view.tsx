import React from 'react';
import { useTranslation } from 'react-i18next';

import type { IGroup } from '@/interfaces/group';
import EDSvg from '@/ui/EDSvg';

import NoGroups from './NoGroups';
import GroupsList from './GroupsList';

import classes from './GroupsSidebar.module.scss';

interface IProps {
	readonly groupsList: IGroup[];
	readonly selectedGroupIndex: number | null;
	readonly searchGroupInput: string | null;
	readonly onCreateNewGroup: () => void;
	readonly onSelectGroup: (_: number) => void;
	readonly onSearchGroupInput: (_: string) => void;
}

const GroupsSidebarView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['sidebar']}>
			<div className={classes['innerSidebar']}>
				<div className={classes['searchContainer']}>
					<input
						type="search"
						className={classes['searchContainer__input']}
						placeholder="Search Groups"
						size={18}
						onChange={({ currentTarget: { value } }) => props.onSearchGroupInput(value)}
					/>
					<button
						type="button"
						className={classes['buttonContainer']}
						onClick={props.onCreateNewGroup}
					>
						<span className={classes['buttonContainer__text']}>
							{t('groupCenter.groupSideBar.newGroupButton')}
						</span>
						<EDSvg name="plus" className={classes['buttonContainer__icon']} />
					</button>
				</div>
				<hr className={classes['dividerLine']} />
				{props.groupsList.length !== 0 ? (
					<GroupsList
						groupsList={props.groupsList}
						selectedGroupIndex={props.selectedGroupIndex!}
						searchGroupInput={props.searchGroupInput}
						onSelectGroup={props.onSelectGroup}
					/>
				) : (
					<NoGroups />
				)}
			</div>
		</div>
	);
};

GroupsSidebarView.displayName = 'GroupsSidebarView';
GroupsSidebarView.defaultProps = {};

export default React.memo(GroupsSidebarView);
