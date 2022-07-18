/* eslint-disable max-lines */
import React from 'react';

import EDSvg from '@/ui/EDSvg';

import { IGroup } from '@/interfaces/group';

import classes from './GroupInfo.module.scss';

interface IProps {
	readonly selectedGroup: IGroup;
	readonly groupLabel: string;
	readonly isLabelOnEdit: boolean;
	readonly isHovering: boolean;
	readonly onLabelOnEdit: (isEdit: boolean) => void;
	readonly onHovering: (isHovering: boolean) => void;
	readonly onChangeGroupLabel: (newGroupLabel: string) => void;
	readonly onUpdateGroupLabel: () => void;
	readonly onCancelLabelChanges: () => void;
}

const GroupInfoView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['groupInfo']}>
			<div className={classes['innerGroupInfo']}>
				{!props.isLabelOnEdit ? (
					<div
						className={classes['groupLableContainer']}
						onMouseEnter={() => props.onHovering(true)}
						onMouseLeave={() => props.onHovering(false)}
					>
						<span onDoubleClick={() => props.onLabelOnEdit(true)}>{props.groupLabel}</span>
					</div>
				) : (
					<div>
						<form onSubmit={props.onUpdateGroupLabel}>
							<input
								className={classes['groupLableContainer__lable']}
								value={props.groupLabel}
								onChange={(e) => props.onChangeGroupLabel(e.target.value)}
							/>
						</form>
						<div className={classes['updateLableButtonsContainer']}>
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

				<div className={classes['createdTime']}>
					<span className={classes['createdTime__text']}>Created in:</span>
					<div className={classes['createdTimeDate']}>
						<span className={classes['createdTime__text']}>{props.selectedGroup.createdAt}</span>
					</div>
				</div>
				<div className={classes['uniqueIdContainer']}>
					<span className={classes['uniqueIdContainer__text']}>Unique ID:</span>
					<div className={classes['uniqueId']}>
						<span className={classes['uniqueId__id']}>{props.selectedGroup.id}</span>
						<EDSvg className={classes['uniqueId__icon']} name="uniqueId" />
					</div>
				</div>
				<button className={classes['moreInfoButton']} type="button">
					<EDSvg className={classes['moreInfoButton__icon']} name="moreInfoIcon" />
				</button>
			</div>
		</div>
	);
};

GroupInfoView.displayName = 'GroupInfoView';
GroupInfoView.defaultProps = {};

export default React.memo(GroupInfoView);
