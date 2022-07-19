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

const UserSettingsModalView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const modalRoot = document.getElementById('overlay-root') as HTMLElement;

	const confirmButtonClasses = props.confirmButtonState
		? classes['body__button']
		: concatClasses(classes, 'body__button', 'body__button--disabled');

	return (
		<>
			<EDBackdrop onBackdropClick={props.onBackdropClick} />
			{ReactDOM.createPortal(
				<section className={classes['mainWrapper']}>
					<div className={classes['deleteUserWrapper']}>
						<div className={classes['header']}>
							<button
								type="button"
								className={classes['header__button']}
								onClick={props.onBackdropClick}
							>
								<EDSvg className={classes['header__icon']} name="userSettingsCloseModal" />
								Cancel
							</button>
						</div>
						<div className={classes['body']}>
							<EDSvg className={classes['body__icon']} name="userSettingsExlintSymbol" />
							<span className={classes['body__upperText']}>
								You are about to delete your user:
							</span>
							<span className={classes['body__middleText']}>
								All saved data, groups, policies and configurations will be lost
							</span>
							<span className={classes['body__lowerText']}>
								To confirm, type
								<span className={concatClasses(classes, 'body__lowerText', 'body--redText')}>
									&nbsp;DELETE-USER
								</span>
							</span>
							<input
								className={classes['body__input']}
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
