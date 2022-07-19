import React from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

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
	const { t } = useTranslation();

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
								{t('userSettingsModal.bar')}
							</button>
						</div>
						<div className={classes['body']}>
							<EDSvg className={classes['body__icon']} name="userSettingsExlintSymbol" />
							<span className={classes['body__upperText']}>
								{t('userSettingsModal.upperText')}
							</span>
							<span className={classes['body__middleText']}>
								{t('userSettingsModal.middleText')}
							</span>
							<span className={classes['body__lowerText']}>
								{t('userSettingsModal.lowerText')}
								<span className={concatClasses(classes, 'body__lowerText', 'body--redText')}>
									&nbsp;{t('userSettingsModal.subLowerText')}
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
								{t('userSettingsModal.confirmButton')}
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
