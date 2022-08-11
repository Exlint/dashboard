import React from 'react';

import { concatClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';

import classes from './EDEditLabel.module.scss';

interface IProps {
	readonly label: string;
	readonly isLabelOnEdit: boolean;
	readonly onEditLabelClick: (_: boolean) => void;
	readonly onChangeLabel: (_: string) => void;
	readonly onUpdateLabel: () => void;
	readonly onCancelLabelChanges: () => void;
}

const EDEditLabelView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['labelContainer']}>
			{!props.isLabelOnEdit ? (
				<>
					<span
						className={classes['labelContainer__label']}
						onDoubleClick={() => props.onEditLabelClick(true)}
					>
						{props.label}
					</span>
					<button
						type="button"
						className={classes['editLabelButton']}
						onClick={() => props.onEditLabelClick(true)}
					>
						<EDSvg className={classes['editLabelButton__icon']} name="editLabel" />
					</button>
				</>
			) : (
				<>
					<input
						className={concatClasses(
							classes,
							'labelContainer__labelOnEdit',
							'labelContainer__label',
						)}
						style={{ width: `${props.label.length}ch` }}
						value={props.label}
						autoFocus
						maxLength={20}
						onChange={(e) => props.onChangeLabel(e.target.value)}
					/>
					<div className={classes['updateLabelButtonsContainer']}>
						<button
							className={classes['updateChangesButton']}
							type="button"
							onClick={props.onUpdateLabel}
						>
							<EDSvg className={classes['updateChangesButton__icon']} name="vConfirm" />
						</button>
						<button
							className={classes['cancelChangesButton']}
							type="button"
							onClick={props.onCancelLabelChanges}
						>
							<EDSvg className={classes['cancelChangesButton__icon']} name="cancel" />
						</button>
					</div>
				</>
			)}
		</div>
	);
};

EDEditLabelView.displayName = 'EDEditLabelView';
EDEditLabelView.defaultProps = {};

export default React.memo(EDEditLabelView);
