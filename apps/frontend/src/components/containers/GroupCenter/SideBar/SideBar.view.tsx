import React from 'react';
import { useTranslation } from 'react-i18next';

import EDInputField from '@/ui/EDInputField';
import EDAcceptButton from '@/ui/EDAcceptButton';
import noGroupsImg from '@/images/no-groups.png';
import type { ISideBarGroup } from '@/store/interfaces/groups';

import classes from './SideBar.module.scss';
import GroupsList from './GroupsList';

interface IProps {
	readonly groups: ISideBarGroup[];
	readonly searchInput: string | null;
	readonly isNewGroupButtonDisabled: boolean;
	readonly onSearchInputChange: (value: string) => void;
	readonly onNewButtonClick: VoidFunction;
}

const SideBarView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<aside className={classes['container']}>
			<div className={classes['actionsContainer']}>
				<EDInputField
					className={classes['actionsContainer__searchInput']}
					placeholder={t('groupCenter.sideBar.searchInputPlaceholder')}
					value={props.searchInput}
					onChange={props.onSearchInputChange}
				/>
				<EDAcceptButton
					type="button"
					iconName="circleAdd"
					disabled={props.isNewGroupButtonDisabled}
					onClick={props.onNewButtonClick}
				>
					{t('groupCenter.sideBar.newGroupAction')}
				</EDAcceptButton>
			</div>

			<hr className={classes['container__divider']} />

			{props.groups.length === 0 ? (
				<div className={classes['noGroupsContainer']}>
					<h3 className={classes['noGroupsContainer__header']}>
						{t('groupCenter.sideBar.noGroupsHeader')}
					</h3>
					<img
						className={classes['noGroupsContainer__img']}
						src={noGroupsImg}
						alt={t('groupCenter.sideBar.noGroupsHeader')}
					/>
				</div>
			) : (
				<GroupsList groups={props.groups} />
			)}
		</aside>
	);
};

SideBarView.displayName = 'SideBarView';
SideBarView.defaultProps = {};

export default React.memo(SideBarView);
