import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { concatClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';
import logosObject from '@/utils/libraries-logos';
import type { ISideBarGroup } from '@/store/interfaces/groups';

import classes from './GroupItem.module.scss';

interface IProps {
	readonly group: ISideBarGroup;
	readonly isSelected: boolean;
	readonly onCopyGroupId: () => void;
}

const GroupItemView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const librariesNamesSlice = props.group.librariesNames;

	const policiesNames = [null, null, null, null].map((item, index) => {
		if (librariesNamesSlice[index]) {
			return librariesNamesSlice[index]!.toLowerCase() as keyof typeof logosObject;
		}

		return item;
	});

	return (
		<div key={props.group.id} className={classes['container']}>
			<Link
				className={concatClasses(
					classes,
					'groupItem',
					props.isSelected ? 'groupItem--selected' : null,
				)}
				to={`/group-center/${props.group.id}/policies`}
			>
				<h3
					className={concatClasses(
						classes,
						'groupItem__label',
						props.isSelected ? 'groupItem__label--selected' : null,
					)}
				>
					{props.group.label}
				</h3>
				<div className={classes['groupIdContainer']}>
					<span className={classes['groupIdContainer__value']}>
						{t('groupCenter.uniqueId')}
						<Trans>&#58;</Trans>
						&nbsp;
						{props.group.id.substring(0, 7)}
						<Trans>&#8230;</Trans>
					</span>
					<EDSvg
						className={classes['groupIdContainer__icon']}
						name="copy"
						onClick={props.onCopyGroupId}
					/>
				</div>
				<div className={classes['policiesContainer']}>
					<span className={classes['policiesContainer__text']}>
						{t('groupCenter.sideBar.policies')}
						<Trans>&#58;</Trans>
					</span>
					{policiesNames.map((libraryName, index) => (
						<div key={index} className={classes['policyItem']}>
							{libraryName && (
								<img
									className={classes['policyItem__img']}
									src={logosObject[libraryName]}
									alt={libraryName}
								/>
							)}
						</div>
					))}
				</div>
			</Link>
			{props.isSelected && <div className={classes['container__border']} />}
		</div>
	);
};

GroupItemView.displayName = 'GroupItemView';
GroupItemView.defaultProps = {};

export default React.memo(GroupItemView);
