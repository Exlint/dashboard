import React, { type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import ReactDOM from 'react-dom';

import EDBackdrop from '@/ui/EDBackdrop';
import EDSvg from '@/ui/EDSvg';
import blackExlint from '@/images/black-exlint-logo.png';
import { concatClasses } from '@/utils/component';

import classes from './DeleteAccountModal.module.scss';

interface IProps {
	readonly isConfirmButtonDisabled: boolean;
	readonly onClose: VoidFunction;
	readonly onDelete: (e: FormEvent<HTMLFormElement>) => void;
	readonly onDeleteAccountInputChangeHandler: (input: string) => void;
}

const DeleteAccountModalView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const modalRoot = document.getElementById('overlay-root') as HTMLElement;

	return (
		<>
			<EDBackdrop onBackdropClick={props.onClose} />
			{ReactDOM.createPortal(
				<form className={classes['container']} onSubmit={props.onDelete}>
					<div className={classes['header']}>
						<button type="button" className={classes['headerButton']} onClick={props.onClose}>
							<EDSvg className={classes['headerButton__icon']} name="close" />
							<span className={classes['headerButton__text']}>
								{t('accountSettings.account.deleteModal.cancel')}
							</span>
						</button>
					</div>
					<div className={classes['body']}>
						<img className={classes['body__logo']} src={blackExlint} alt="Exlint" />
						<span className={classes['body__header']}>
							{t('accountSettings.account.deleteModal.header')}
						</span>
						<span className={classes['body__subHeader']}>
							{t('accountSettings.account.deleteModal.subHeader')}
						</span>
						<span className={classes['body__actionText']}>
							{t('accountSettings.account.deleteModal.actionText')}
							&nbsp;
							<span
								className={concatClasses(
									classes,
									'body__actionText',
									'body__actionText--phraseText',
								)}
							>
								{t('accountSettings.account.deleteModal.actionPhraseText')}
							</span>
						</span>
						<input
							className={classes['body__input']}
							type="text"
							placeholder={t('accountSettings.account.deleteModal.inputPlaceholder')}
							autoFocus
							onChange={({ currentTarget: { value } }) =>
								props.onDeleteAccountInputChangeHandler(value)
							}
						/>
						<button
							className={classes['body__button']}
							type="submit"
							disabled={props.isConfirmButtonDisabled}
						>
							{t('accountSettings.account.deleteModal.confirmButton')}
						</button>
					</div>
				</form>,
				modalRoot,
			)}
		</>
	);
};

DeleteAccountModalView.displayName = 'DeleteAccountModalView';
DeleteAccountModalView.defaultProps = {};

export default React.memo(DeleteAccountModalView);
