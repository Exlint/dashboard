import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

import { IGroup } from '@/interfaces/group';

import VSvg from '@/ui/VSvg';
import NoGroups from './NoGroups';
import GroupsList from './GroupsList';
import classes from './GroupsSidebar.module.scss';

interface IProps {
	readonly groupsList: IGroup[] | [];
	readonly selectedGroup: IGroup | null;
	readonly onCreateNewGroup: () => void;
	readonly onSelectedGroup: (group: IGroup) => void;
}

const GroupsSidebarView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

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
						className={classes['buttonContainer']}
						onClick={props.onCreateNewGroup}
					>
						<span className={classes['buttonContainer__text']}>New</span>
						<VSvg name="plusIcon" className={classes['buttonContainer__icon']} />
					</button>
				</div>
				<hr className={classes['dividerLine']} />
				{props.groupsList.length === 0 && <NoGroups />}
				{props.groupsList.length > 0 && (
					<GroupsList
						groupsList={props.groupsList}
						selectedGroup={props.selectedGroup}
						onSelectedGroup={props.onSelectedGroup}
					/>
				)}
			</div>
		</div>
	);
};

GroupsSidebarView.displayName = 'GroupsSidebarView';
GroupsSidebarView.defaultProps = {};

export default React.memo(GroupsSidebarView);
