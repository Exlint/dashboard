import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import { concatClasses } from '@/utils/component';
import type { IGroup } from '@/interfaces/group';

import classes from './GroupInfo.module.scss';
import DeleteGroupBackdrop from './DeleteGroupBackdrop';

interface IProps {
	readonly selectedGroup: IGroup;
	readonly groupLabel: string;
	readonly isLabelOnEdit: boolean;
	readonly copyGroupId: boolean;
	readonly isMoreInfoClicked: boolean;
	readonly onEditLabelClick: (isEdit: boolean) => void;
	readonly onChangeGroupLabel: (newGroupLabel: string) => void;
	readonly onUpdateGroupLabel: () => void;
	readonly onCancelLabelChanges: () => void;
	readonly onCopyGroupId: () => void;
	readonly onMoreInfoClick: () => void;
	readonly onCloseMoreInfo: () => void;
	readonly onDeleteGroup: () => void;
}

const GroupInfoView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['groupInfo']}>
			<div className={classes['innerGroupInfo']}>
				{!props.isLabelOnEdit ? (
					<div className={classes['groupLabelContainer']}>
						<span
							className={classes['groupLabelContainer__label']}
							onDoubleClick={() => props.onEditLabelClick(true)}
						>
							{props.groupLabel}
						</span>
						<button
							type="button"
							className={classes['editLabelButton']}
							onClick={() => props.onEditLabelClick(true)}
						>
							<EDSvg className={classes['editLabelButton__icon']} name="editLabel" />
						</button>
					</div>
				) : (
					<div className={classes['groupLabelContainerOnEdit']}>
						<input
							className={concatClasses(
								classes,
								'groupLabelContainer__labelOnEdit',
								'groupLabelContainer__label',
							)}
							style={{ width: `${props.groupLabel.length}ch` }}
							value={props.groupLabel}
							autoFocus
							onChange={(e) => props.onChangeGroupLabel(e.target.value)}
						/>
						<div className={classes['updateLabelButtonsContainer']}>
							<button
								className={classes['updateChangesButton']}
								type="button"
								onClick={props.onUpdateGroupLabel}
							>
								<EDSvg className={classes['updateChangesButton__icon']} name="vIcon" />
							</button>
							<button
								className={classes['cancelChangesButton']}
								type="button"
								onClick={props.onCancelLabelChanges}
							>
								<EDSvg className={classes['cancelChangesButton__icon']} name="cancelIcon" />
							</button>
						</div>
					</div>
				)}

				<div className={classes['uniqueIdContainer']}>
					<span className={classes['uniqueIdContainer__text']}>
						{t('groupCenter.groupDetails.groupInfo.uniqId')}
					</span>
					<div className={classes['uniqueId']}>
						<span className={classes['uniqueId__id']}>{props.selectedGroup.id}</span>
						<button
							className={classes['uniqIdCopyButton']}
							type="button"
							onClick={props.onCopyGroupId}
						>
							<EDSvg className={classes['uniqIdCopyButton__icon']} name="uniqueId" />
							{props.copyGroupId && (
								<span className={classes['uniqIdCopyButton__copiedText']}>
									{t('groupCenter.groupDetails.groupInfo.copied')}
								</span>
							)}
						</button>
					</div>
				</div>

				<div className={classes['transperentBackdrop']} />
				<div className={classes['moreInfoContainer']}>
					<button
						className={classes['moreInfoButton']}
						type="button"
						onClick={props.onMoreInfoClick}
					>
						<EDSvg className={classes['moreInfoButton__icon']} name="threeDots" />
					</button>
					{props.isMoreInfoClicked && (
						<DeleteGroupBackdrop
							onCloseMoreInfo={props.onCloseMoreInfo}
							onDeleteGroup={props.onDeleteGroup}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

GroupInfoView.displayName = 'GroupInfoView';
GroupInfoView.defaultProps = {};

export default React.memo(GroupInfoView);
