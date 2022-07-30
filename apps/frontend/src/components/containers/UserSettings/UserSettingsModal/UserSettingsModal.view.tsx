import React from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import EDBackdrop from '@/ui/EDBackdrop';
import { concatClasses } from '@/utils/component';

import classes from './UserSettingsModal.module.scss';

interface IProps {
	readonly isConfirmButtonDisabled: boolean;
	readonly onDeleteUser: () => void;
	readonly onToggleModal: () => void;
	readonly onDeleteUserInputChangeHandler: (_: string) => void;
}

const UserSettingsModalView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const modalRoot = document.getElementById('overlay-root') as HTMLElement;

	return (
		<>
			<EDBackdrop onBackdropClick={props.onToggleModal} />
			{ReactDOM.createPortal(
				<form className={classes['container']} onSubmit={props.onDeleteUser}>
					<div className={classes['deleteUserWrapper']}>
						<div className={classes['header']}>
							<button
								type="button"
								role="button"
								className={classes['header__button']}
								onClick={props.onToggleModal}
							>
								<EDSvg className={classes['header__icon']} name="userSettingsCloseModal" />
								{t('userSettingsModal.cancelButton')}
							</button>
						</div>
						<div className={classes['body']}>
							<EDSvg className={classes['body__icon']} name="userSettingsExlintSymbol" />
							<span className={classes['body__upperText']}>
								{t('userSettingsModal.upperText')}
							</span>
							<span className={classes['body__details']}>{t('userSettingsModal.details')}</span>
							<span className={classes['body__actionText']}>
								{t('userSettingsModal.actionText')}
								&nbsp;
								<span
									className={concatClasses(
										classes,
										'body__actionText',
										'body__actionText--redText',
									)}
								>
									{t('userSettingsModal.actionPhraseText')}
								</span>
							</span>
							<input
								className={classes['body__input']}
								type="text"
								placeholder={t('userSettingsModal.inputPlaceholder')}
								onChange={({ currentTarget: { value } }) =>
									props.onDeleteUserInputChangeHandler(value)
								}
							/>
							<button
								className={classes['body__button']}
								type="submit"
								role="button"
								disabled={props.isConfirmButtonDisabled}
							>
								{t('userSettingsModal.confirmButton')}
							</button>
						</div>
					</div>
				</form>,
				modalRoot,
			)}
		</>
	);
};

UserSettingsModalView.displayName = 'UserSettingsModalView';
UserSettingsModalView.defaultProps = {};

export default React.memo(UserSettingsModalView);
