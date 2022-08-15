import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import EDInlineEdit from '@/ui/EDInlineEdit';
import type { IGroup } from '@/interfaces/group';

import classes from './GroupInfo.module.scss';
import DeleteGroupBackdrop from './DeleteGroupBackdrop';

interface IProps {
	readonly selectedGroup: IGroup;
	readonly copyGroupId: boolean;
	readonly tooltopRef: React.RefObject<HTMLDivElement>;
	readonly isTooltipVisible: boolean;
	readonly toggleTooltipVisibility: () => void;
	readonly onUpdateGroupLabel: (newInput: string) => void;
	readonly onCopyGroupId: () => void;
	readonly onDeleteGroup: () => void;
}

const GroupInfoView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['groupInfo']}>
			<div className={classes['innerGroupInfo']}>
				<EDInlineEdit
					key="groupLabel"
					maxLength={20}
					valueFromDB={props.selectedGroup.label}
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
						onClick={props.toggleTooltipVisibility}
					>
						<EDSvg className={classes['moreInfoButton__icon']} name="threeDots" />
					</button>
					{props.isTooltipVisible && (
						<DeleteGroupBackdrop
							onDeleteGroup={props.onDeleteGroup}
							tooltopRef={props.tooltopRef}
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
