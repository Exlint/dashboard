import React from 'react';

import EDSvg from '@/ui/EDSvg';

import classes from './EDInlineEdit.module.scss';

interface IProps {
	readonly label: string;
	readonly isInputOnEdit: boolean;
	readonly onEditInlineClick: () => void;
	readonly onChangeInput: (_: string) => void;
	readonly onUpdateInput: () => void;
	readonly onCancelInputChanges: () => void;
}

const EDInlineEditView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['inlineEditContainer']}>
			{props.isInputOnEdit ? (
				<>
					<input
						className={classes['inlineEditContainer__text']}
						style={{ width: `${props.label.length}ch` }}
						value={props.label}
						autoFocus
						maxLength={20}
						onChange={(e) => props.onChangeInput(e.target.value)}
					/>
					<div className={classes['updateInputButtonsContainer']}>
						<button
							className={classes['updateChangesButton']}
							type="button"
							onClick={props.onUpdateInput}
						>
							<EDSvg className={classes['updateChangesButton__icon']} name="vConfirm" />
						</button>
						<button type="button" onClick={props.onCancelInputChanges}>
							<EDSvg className={classes['cancelChangesButtonIcon']} name="cancel" />
						</button>
					</div>
				</>
			) : (
				<>
					<span
						className={classes['inlineEditContainer__text']}
						onDoubleClick={props.onEditInlineClick}
					>
						{props.label}
					</span>
					<button
						type="button"
						className={classes['inlineEditButton']}
						onClick={props.onEditInlineClick}
					>
						<EDSvg className={classes['inlineEditButton__icon']} name="inlineEdit" />
					</button>
				</>
			)}
		</div>
	);
};

EDInlineEditView.displayName = 'EDInlineEditView';
EDInlineEditView.defaultProps = {};

export default React.memo(EDInlineEditView);
