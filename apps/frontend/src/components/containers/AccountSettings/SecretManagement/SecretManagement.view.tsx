import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import type { Secret } from '@prisma/client';

import SecretsList from './SecretsList';
import type { ISecretItem } from './interfaces/secrets';

import classes from './SecretManagement.module.scss';
import PostSecretCreation from './PostSecretCreation';

interface IProps {
	readonly secretsList: ISecretItem[];
	readonly createdSecretDetails: Pick<Secret, 'id' | 'secret'> | null;
	readonly onDeleteSecret: (secretId: string) => void;
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
						{props.secretsList.length > 0 && (
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

			{props.createdSecretDetails && (
				<PostSecretCreation createdSecretDetails={props.createdSecretDetails} />
			)}

			{props.secretsList.length === 0 && props.createdSecretDetails === null && (
				<span className={classes['container__noSecrets']}>
					{t('accountSettings.secretManagement.noSecrets')}
				</span>
			)}

			{props.secretsList.length > 0 && (
				<SecretsList secretsList={props.secretsList} onDeleteSecret={props.onDeleteSecret} />
			)}
		</main>
	);
};

SecretManagementView.displayName = 'SecretManagementView';
SecretManagementView.defaultProps = {};

export default React.memo(SecretManagementView);
