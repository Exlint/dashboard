import React from 'react';
import ReactDOM from 'react-dom';

import EDSvg from '@/ui/EDSvg';
import EDBackdrop from '@/ui/EDBackdrop';
import { concatClasses } from '@/utils/component';

import classes from './UserSettingsModal.module.scss';

interface IProps {
	readonly confirmButtonState: boolean;
	readonly onBackdropClick: () => void;
	readonly onDeleteUserChangeHandler: (_: string) => void;
}

const UserSettingsModalView: React.FC<IProps> = (props) => {
	const modalRoot = document.getElementById('overlay-root') as HTMLElement;

	const disabledConfirmClass = `${concatClasses(
		classes,
		'deleteUserWrapper__body--button',
		'deleteUserWrapper__body--buttonDisabled',
	)}`;

	const confirmButtonClasses = props.confirmButtonState
		? `${classes['deleteUserWrapper__body--button']}`
		: disabledConfirmClass;

	return (
		<>
			<EDBackdrop onBackdropClick={props.onBackdropClick} />
			{ReactDOM.createPortal(
				<section className={classes['mainWrapper']}>
					<div className={classes['deleteUserWrapper']}>
						<div className={classes['deleteUserWrapper__header']}>
							<button
								type="button"
								className={classes['deleteUserWrapper__header--button']}
								onClick={props.onBackdropClick}
							>
								<EDSvg
									className={classes['deleteUserWrapper__header--icon']}
									name="userSettingsCloseModal"
								/>
								Cancel
							</button>
						</div>
						<div className={classes['deleteUserWrapper__body']}>
							<EDSvg
								className={classes['deleteUserWrapper__body--icon']}
								name="userSettingsExlintSymbol"
							/>
							<span className={classes['deleteUserWrapper__body--upperText']}>
								You are about to delete your user:
							</span>
							<span className={classes['deleteUserWrapper__body--middleText']}>
								All saved data, groups, policies and configurations will be lost
							</span>
							<span className={classes['deleteUserWrapper__body--lowerText']}>
								To confirm, type
								<span
									className={concatClasses(
										classes,
										'deleteUserWrapper__body--lowerText',
										'deleteUserWrapper__body--redText',
									)}
								>
									&nbsp;DELETE-USER
								</span>
							</span>
							<input
								className={classes['deleteUserWrapper__body--input']}
								type="text"
								placeholder="Type here"
								onChange={({ currentTarget: { value } }) =>
									props.onDeleteUserChangeHandler(value)
								}
							/>
							<button
								className={confirmButtonClasses}
								type="button"
								disabled={!props.confirmButtonState}
							>
								Confirm
							</button>
						</div>
					</div>
				</section>,
				modalRoot,
			)}
		</>
	);
};

UserSettingsModalView.displayName = 'UserSettingsModalView';
UserSettingsModalView.defaultProps = {};

export default React.memo(UserSettingsModalView);
