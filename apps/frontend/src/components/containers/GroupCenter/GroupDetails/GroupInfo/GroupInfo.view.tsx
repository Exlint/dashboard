import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import EDInlineEdit from '@/ui/EDInlineEdit';
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
				<EDInlineEdit
					key="groupLabel"
					valueFromDB={props.selectedGroup.label}
					maxLength={20}
					onUpdateInput={props.onUpdateGroupLabel}
				/>

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
