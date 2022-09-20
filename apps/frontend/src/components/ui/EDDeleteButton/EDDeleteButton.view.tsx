import React, { type FormEvent, type ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import blackExlint from '@/images/black-exlint-logo.png';
import { concatClasses, concatDiverseClasses } from '@/utils/component';

import EDAcceptButton from '../EDAcceptButton';
import EDBackdrop from '../EDBackdrop';
import EDSvg from '../EDSvg';

import classes from './EDDeleteButton.module.scss';

interface IProps {
	readonly className?: string;
	readonly isModalOnView: boolean;
	readonly modalTitle: string;
	readonly modalSubTitle: string;
	readonly modalConfirmationKeyword: string;
	readonly isConfirmButtonDisabled: boolean;
	readonly onOpenModal: VoidFunction;
	readonly onCloseModal: VoidFunction;
	readonly onModalConfirmButtonClick: (e: FormEvent<HTMLFormElement>) => void;
	readonly onInputChangeHandler: (input: string) => void;
	readonly children?: ReactNode;
}

const EDDeleteButtonView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const modalRoot = document.getElementById('overlay-root') as HTMLElement;

	return (
		<>
			<EDAcceptButton
				className={concatDiverseClasses(classes['button'], props.className)}
				disabled={false}
				type="button"
				onClick={props.onOpenModal}
			>
				{props.children}
			</EDAcceptButton>

			{props.isModalOnView && (
				<>
					<EDBackdrop onBackdropClick={props.onCloseModal} />
					{ReactDOM.createPortal(
						<form className={classes['container']} onSubmit={props.onModalConfirmButtonClick}>
							<div className={classes['header']}>
								<button
									type="button"
									className={classes['headerButton']}
									onClick={props.onCloseModal}
								>
									<EDSvg className={classes['headerButton__icon']} name="close" />
									<span className={classes['headerButton__text']}>
										{t('deleteModal.cancel')}
									</span>
								</button>
							</div>
							<div className={classes['body']}>
								<img className={classes['body__logo']} src={blackExlint} alt="Exlint" />
								<span className={classes['body__header']}>{props.modalTitle}</span>
								<span className={classes['body__subHeader']}>{props.modalSubTitle}</span>
								<span className={classes['body__actionText']}>
									{t('deleteModal.actionText')}
									&nbsp;
									<span
										className={concatClasses(
											classes,
											'body__actionText',
											'body__actionText--phraseText',
										)}
									>
										{props.modalConfirmationKeyword}
									</span>
								</span>
								<input
									className={classes['body__input']}
									type="text"
									placeholder={t('deleteModal.inputPlaceholder')}
									autoFocus
									onChange={({ currentTarget: { value } }) =>
										props.onInputChangeHandler(value)
									}
								/>
								<button
									className={classes['body__button']}
									type="submit"
									disabled={props.isConfirmButtonDisabled}
								>
									{t('deleteModal.confirmButton')}
								</button>
							</div>
						</form>,
						modalRoot,
					)}
				</>
			)}
		</>
	);
};

EDDeleteButtonView.displayName = 'EDDeleteButtonView';
EDDeleteButtonView.defaultProps = {};

export default React.memo(EDDeleteButtonView);
