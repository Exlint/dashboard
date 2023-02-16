import React from 'react';
import { useTranslation } from 'react-i18next';

import EDDeleteButton from '@/ui/EDDeleteButton';
import EDAcceptButton from '@/ui/EDAcceptButton';

import classes from './Account.module.scss';

interface IProps {
	readonly onSignOutClick: VoidFunction;
	readonly onModalConfirmClick: VoidFunction;
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
				<EDAcceptButton
					className={classes['actionSection__button']}
					disabled={false}
					type="button"
					onClick={props.onSignOutClick}
				>
					{t('accountSettings.account.signOutButton')}
				</EDAcceptButton>
			</section>

			<section className={classes['actionSection']}>
				<h3 className={classes['actionSection__header--delete']}>
					{t('accountSettings.account.deleteAccountHeader')}
				</h3>
				<hr className={classes['actionSection__divider']} />
				<span className={classes['actionSection__subHeader']}>
					{t('accountSettings.account.deleteAccountSubHeader')}
				</span>
				<EDDeleteButton
					className={classes['actionSection__button']}
					modalTitle={t('accountSettings.account.deleteModal.header')}
					modalSubTitle={t('accountSettings.account.deleteModal.subHeader')}
					modalConfirmationKeyword={t('accountSettings.account.deleteModal.actionPhraseText')}
					onModalConfirmClick={props.onModalConfirmClick}
				>
					{t('accountSettings.account.deleteAccountButton')}
				</EDDeleteButton>
			</section>
		</main>
	);
};

AccountView.displayName = 'AccountView';
AccountView.defaultProps = {};

export default React.memo(AccountView);
