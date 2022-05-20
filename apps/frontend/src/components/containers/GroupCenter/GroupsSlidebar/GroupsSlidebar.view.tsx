import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

import NoGroups from './NoGroups';
import GroupsList from './GroupsList';
import classes from './GroupsSlidebar.module.scss';
import VSvg from './../../../ui/VSvg';

interface IProps {
	readonly onCreateNewGroup: () => void;
	readonly groupsList: { title: string; id: number; policies: number[] }[] | [];
}

const GroupsSlidebarView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['slidebar']}>
			<div className={classes['innerSlidebar']}>
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
				{props.groupsList.length > 0 && <GroupsList groupsList={props.groupsList} />}
			</div>
		</div>
	);
};

GroupsSlidebarView.displayName = 'GroupsSlidebarView';
GroupsSlidebarView.defaultProps = {};

export default React.memo(GroupsSlidebarView);
