import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import SecretsList from './SecretsList';

import classes from './SecretManagement.module.scss';
import PostSecretCreation from './PostSecretCreation';

interface IProps {
	readonly hasSecrets: boolean;
	readonly onRevokeAllSecrets: VoidFunction;
}

const SecretManagementView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<main className={classes['container']}>
			<section className={classes['actionSection']}>
				<div className={classes['actionHeader']}>
					<h3 className={classes['actionHeader__header']}>
						{t('accountSettings.secretManagement.actionHeader')}
					</h3>
					<div className={classes['headerActionsContainer']}>
						<Link className={classes['headerActionsContainer__generate']} to="new">
							{t('accountSettings.secretManagement.generateNewSecretButton')}
						</Link>
						{props.hasSecrets && (
							<button
								className={classes['headerActionsContainer__revokeAll']}
								type="button"
								onClick={props.onRevokeAllSecrets}
							>
								{t('accountSettings.secretManagement.revokeAllSecretAction')}
							</button>
						)}
					</div>
				</div>
				<hr className={classes['actionSection__divider']} />
				<span className={classes['actionSubHeader']}>
					{t('accountSettings.secretManagement.actionSubHeaderPrefix')}
					&nbsp;
					<a
						className={classes['actionSubHeader__postfix']}
						href="https://github.com/Exlint/actions"
						target="_blank"
					>
						{t('accountSettings.secretManagement.actionSubHeaderPostfix')}
					</a>
				</span>
			</section>

			<PostSecretCreation />
			<SecretsList />
		</main>
	);
};

SecretManagementView.displayName = 'SecretManagementView';
SecretManagementView.defaultProps = {};

export default React.memo(SecretManagementView);
