import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import type { ILibraryData, IPolicyData } from '@/interfaces/libraries';
import { concatClasses } from '@/utils/component';
import logosObject from '@/utils/libraries-logos';

import classes from './Group.module.scss';

interface IProps {
	readonly groupId: string;
	readonly groupLabel: string;
	readonly policies: IPolicyData[];
	readonly isSelected: boolean;
	readonly copyGroupId: boolean;
	readonly onSelectGroup: () => void;
	readonly onCopyGroupId: () => void;
}

const GroupView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const titleClasses = props.isSelected
		? concatClasses(
				classes,
				'groupDetailsContainer__title',
				props.isSelected && 'groupDetailsContainer__title--selected',
		  )
		: classes['groupDetailsContainer__title'];

	return (
		<section
			className={concatClasses(
				classes,
				'container',
				props.isSelected ? 'container--selected' : 'container--notSelected',
			)}
		>
			<div className={classes['innerGroup']}>
				<div className={classes['groupDetailsContainer']}>
					<h3 className={titleClasses}>{props.groupLabel}</h3>
					<div className={classes['uniqueIdContainer']}>
						<span className={classes['uniqueIdContainer__text']}>
							{t('groupCenter.groupSideBar.group.uniqueId')}
						</span>
						<button
							className={classes['uniqIdCopyButton']}
							type="button"
							onClick={props.onCopyGroupId}
						>
							{t('groupCenter.groupSideBar.group.copy')}
							<EDSvg className={classes['uniqIdCopyButton__icon']} name="uniqueId" />
							{props.copyGroupId && (
								<span className={classes['uniqIdCopyButton__copiedText']}>
									{t('groupCenter.groupSideBar.group.copied')}
								</span>
							)}
						</button>
					</div>
					<div className={classes['policiesContainer']}>
						<span className={classes['policiesContainer__text']}>
							{t('groupCenter.groupSideBar.group.policies')}
						</span>
						{props.policies.map((policy) => {
							const libraryNameInLowerCase =
								policy.libraryName.toLocaleLowerCase() as Lowercase<ILibraryData['name']>;

							return (
								<div className={classes['innerLibraryLogo']} key={policy.id}>
									<img
										className={classes['innerLibraryLogo__logo']}
										src={logosObject[libraryNameInLowerCase]}
										alt="library logo"
									/>
								</div>
							);
						})}
						{props.policies && props.policies.length > 4 && (
							<span className={classes['policiesContainer__text']}>
								{t('groupCenter.groupSideBar.group.additional')}
							</span>
						)}
					</div>
				</div>
				<button className={classes['getInfoButton']} type="button" onClick={props.onSelectGroup}>
					<EDSvg className={classes['getInfoButton__icon']} name="arrowRight" />
				</button>
			</div>
		</section>
	);
};

GroupView.displayName = 'GroupView';
GroupView.defaultProps = {};

export default React.memo(GroupView);
