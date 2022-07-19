import React from 'react';
import { useTranslation } from 'react-i18next';

import { IGroup } from '@/interfaces/group';
import EDSvg from '@/ui/EDSvg';

import NoGroups from './NoGroups';
import GroupsList from './GroupsList';

import classes from './GroupsSidebar.module.scss';

interface IProps {
	readonly groupsList: IGroup[];
	readonly selectedGroupIndex: number | null;
	readonly onCreateNewGroup: () => void;
	readonly onSelectGroup: (index: number) => void;
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
					/>
					<button
						type="button"
						role="button"
						className={classes['buttonContainer']}
						onClick={props.onCreateNewGroup}
					>
						<span className={classes['buttonContainer__text']}>
							{t('groupCenter.groupSideBar.newGroupButton')}
						</span>
						<EDSvg name="plusIcon" className={classes['buttonContainer__icon']} />
					</button>
				</div>
				<hr className={classes['dividerLine']} />
				{props.groupsList.length > 0 ? (
					<GroupsList
						groupsList={props.groupsList}
						selectedGroupIndex={props.selectedGroupIndex!}
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
