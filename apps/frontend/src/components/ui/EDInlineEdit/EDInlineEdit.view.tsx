import React from 'react';

import { concatClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';

import classes from './EDInlineEdit.module.scss';

interface IProps {
	readonly key: string;
	readonly initialValue: string;
	readonly isInputOnEdit: boolean;
	readonly maxInputDigits: number;
	readonly onEditInlineClick: () => void;
	readonly onChangeInput: (value: string) => void;
	readonly onUpdateInput: () => void;
	readonly onCancelInputChanges: () => void;
	readonly onKeyboardPress: (e: React.KeyboardEvent) => void;
}

const EDInlineEditView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']} key={props.key}>
			{props.isInputOnEdit ? (
				<>
					<input
						className={concatClasses(classes, 'container__text', 'container__textOnEdit')}
						style={{ width: `${props.initialValue.length}ch` }}
						value={props.initialValue}
						autoFocus
						maxLength={props.maxInputDigits}
						onKeyPress={(e) => props.onKeyboardPress(e)}
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
					<span className={classes['container__text']} onDoubleClick={props.onEditInlineClick}>
						{props.initialValue}
					</span>
					<button
						type="button"
						className={classes['inlineEditButton']}
						onClick={props.onEditInlineClick}
					>
						<EDSvg className={classes['inlineEditButton__icon']} name="editPencil" />
					</button>
				</>
			)}
		</div>
	);
};

EDInlineEditView.displayName = 'EDInlineEditView';
EDInlineEditView.defaultProps = {};

export default React.memo(EDInlineEditView);
