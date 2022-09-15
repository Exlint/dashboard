import React from 'react';
import { useTranslation } from 'react-i18next';

import { concatClasses } from '@/utils/component';

import DeleteAccountModal from './DeleteAccountModal';

import classes from './Account.module.scss';

interface IProps {
	readonly isDeleteAccountModalOnView: boolean;
	readonly onSignOutClick: VoidFunction;
	readonly onOpenDeleteAccountModal: VoidFunction;
	readonly onCloseDeleteAccountModal: VoidFunction;
}

const AccountView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<main className={classes['container']}>
			<section className={classes['actionSection']}>
				<h3 className={classes['actionSection__header']}>
					{t('accountSettings.account.signOutHeader')}
				</h3>
				<hr className={classes['actionSection__divider']} />
				<span className={classes['actionSection__subHeader']}>
					{t('accountSettings.account.signOutSubHeader')}
				</span>
				<button
					className={classes['actionSection__button']}
					type="button"
					onClick={props.onSignOutClick}
				>
					{t('accountSettings.account.signOutButton')}
				</button>
			</section>

			<section className={classes['actionSection']}>
				<h3
					className={concatClasses(
						classes,
						'actionSection__header',
						'actionSection__header--delete',
					)}
				>
					{t('accountSettings.account.deleteAccountHeader')}
				</h3>
				<hr className={classes['actionSection__divider']} />
				<span className={classes['actionSection__subHeader']}>
					{t('accountSettings.account.deleteAccountSubHeader')}
				</span>
				<button
					className={concatClasses(
						classes,
						'actionSection__button',
						'actionSection__button--delete',
					)}
					type="button"
					onClick={props.onOpenDeleteAccountModal}
				>
					{t('accountSettings.account.deleteAccountButton')}
				</button>
				{props.isDeleteAccountModalOnView && (
					<DeleteAccountModal onClose={props.onCloseDeleteAccountModal} />
				)}
			</section>
		</main>
	);
};

AccountView.displayName = 'AccountView';
AccountView.defaultProps = {};

export default React.memo(AccountView);
