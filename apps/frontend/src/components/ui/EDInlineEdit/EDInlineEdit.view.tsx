import React from 'react';

import { concatClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';

import classes from './EDInlineEdit.module.scss';

interface IProps {
	readonly label: string;
	readonly isLabelOnEdit: boolean;
	readonly onEditLabelClick: () => void;
	readonly onChangeLabel: (_: string) => void;
	readonly onUpdateLabel: () => void;
	readonly onCancelLabelChanges: () => void;
}

const EDInlineEditView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['labelContainer']}>
			{props.isLabelOnEdit ? (
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
						<button type="button" onClick={props.onCancelLabelChanges}>
							<EDSvg className={classes['cancelChangesButtonIcon']} name="cancel" />
						</button>
					</div>
				</>
			) : (
				<>
					<span className={classes['labelContainer__label']} onDoubleClick={props.onEditLabelClick}>
						{props.label}
					</span>
					<button
						type="button"
						className={classes['editLabelButton']}
						onClick={props.onEditLabelClick}
					>
						<EDSvg className={classes['editLabelButton__icon']} name="inlineEdit" />
					</button>
				</>
			)}
		</div>
	);
};

EDInlineEditView.displayName = 'EDInlineEditView';
EDInlineEditView.defaultProps = {};

export default React.memo(EDInlineEditView);
