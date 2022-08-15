import React from 'react';
import ReactDOM from 'react-dom';
import { Trans, useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import EDBackdrop from '@/ui/EDBackdrop';
import { concatClasses } from '@/utils/component';

import classes from './PolicySidebarModal.module.scss';

interface IProps {
	readonly isConfirmButtonDisabled: boolean;
	readonly policyLabel: string;
	readonly onDeletePolicy: () => void;
	readonly onCloseModal: () => void;
	readonly onDeletePolicyInputChangeHandler: (_: string) => void;
}

const PolicySidebarModalView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const modalRoot = document.getElementById('overlay-root') as HTMLElement;

	return (
		<>
			<EDBackdrop onBackdropClick={props.onCloseModal} />
			{ReactDOM.createPortal(
				<form className={classes['container']} onSubmit={props.onDeletePolicy}>
					<div className={classes['deleteUserWrapper']}>
						<div className={classes['header']}>
							<button
								type="button"
								className={classes['header__button']}
								onClick={props.onCloseModal}
							>
								<EDSvg className={classes['header__icon']} name="close" />
								{t('userSettings.userSettingsModal.cancelButton')}
							</button>
						</div>
						<div className={classes['body']}>
							<span className={classes['body__header']}>
								{t('policySidebar.policySidebarModal.header')}
								<Trans>&lsquo;</Trans>
								{props.policyLabel}
								<Trans>&rsquo;</Trans>
								{t('policySidebar.policySidebarModal.subHeader')}
							</span>
							<div className={classes['body__details']}>
								{t('policySidebar.policySidebarModal.details')}
								<span
									className={concatClasses(
										classes,
										'body__details',
										'body__details--redText',
									)}
								>
									{props.policyLabel.toUpperCase()}
								</span>
							</div>
							<input
								className={classes['body__input']}
								type="text"
								placeholder={t('policySidebar.policySidebarModal.inputPlaceholder')}
								onChange={({ currentTarget: { value } }) =>
									props.onDeletePolicyInputChangeHandler(value)
								}
							/>
							<button
								className={classes['body__button']}
								type="submit"
								disabled={props.isConfirmButtonDisabled}
							>
								{t('policySidebar.policySidebarModal.confirmButton')}
							</button>
						</div>
					</div>
				</form>,
				modalRoot,
			)}
		</>
	);
};

PolicySidebarModalView.displayName = 'PolicySidebarModalView';
PolicySidebarModalView.defaultProps = {};

export default React.memo(PolicySidebarModalView);
