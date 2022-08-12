import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import type { IPolicy } from '@/interfaces/policy';
import { concatClasses } from '@/utils/component';

import classes from './Group.module.scss';

interface IProps {
	readonly groupId: string;
	readonly groupLabel: string;
	readonly createdAt: string;
	readonly policies: IPolicy[];
	readonly isSelected: boolean;
	readonly copyGroupId: boolean;
	readonly onSelectGroup: () => void;
	readonly onCopyGroupId: () => void;
}

const GroupView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div
			className={concatClasses(
				classes,
				'container',
				props.isSelected ? 'container--isSelected' : 'container--notSelected',
			)}
		>
			<div className={classes['innerGroup']}>
				<div className={classes['leftSideContainer']}>
					<h3
						className={concatClasses(
							classes,
							'leftSideContainer__title',
							props.isSelected
								? 'leftSideContainer__title--isSelected'
								: 'leftSideContainer__title--notSelected',
						)}
					>
						{props.groupLabel}
					</h3>
					<div className={classes['uniqueIdContainer']}>
						<span className={classes['uniqueIdContainer__text']}>
							{t('groupCenter.groupSideBar.group.uniqId')}
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
						{props.policies.map((policy, index) => (
							<span className={classes['policiesContainer__policy']} key={index}>
								{policy.id}
							</span>
						))}
					</div>
				</div>

				<button className={classes['getInfoButton']} type="button" onClick={props.onSelectGroup}>
					<EDSvg className={classes['getInfoButton__icon']} name="arrowRight" />
				</button>
			</div>
		</div>
	);
};

GroupView.displayName = 'GroupView';
GroupView.defaultProps = {};

export default React.memo(GroupView);
