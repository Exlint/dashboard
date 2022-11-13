import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import type { ISecretItem } from '../interfaces/secrets';

import classes from './SecretsList.module.scss';

interface IProps {
	readonly secretsList: ISecretItem[];
	readonly onRefreshSecret: (secretId: string) => void;
	readonly onDeleteSecret: (secretId: string) => void;
}

const SecretsListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<section className={classes['secretsList']}>
			{props.secretsList.map((secret) => (
				<div key={secret.id} className={classes['secretContainer']}>
					<div className={classes['secretDetails']}>
						<h5 className={classes['secretDetails__label']}>{secret.label}</h5>
						<span className={classes['secretDetails__expiration']}>
							{secret.expiration ? (
								<>
									{t('accountSettings.secretManagement.secretExpirationPrefix')}
									&nbsp;
									<i>{new Intl.DateTimeFormat('en-US').format(secret.expiration)}</i>
								</>
							) : (
								t('accountSettings.secretManagement.secretExpirationNeverExpires')
							)}
							<Trans>&#8228;</Trans>
						</span>
					</div>
					<div className={classes['secretActions']}>
						<button
							className={classes['secretActions__refresh']}
							type="button"
							onClick={() => props.onRefreshSecret(secret.id)}
						>
							{t('accountSettings.secretManagement.refreshSecretAction')}
						</button>
						<button
							className={classes['secretActions__delete']}
							type="button"
							onClick={() => props.onDeleteSecret(secret.id)}
						>
							{t('accountSettings.secretManagement.deleteSecretAction')}
						</button>
					</div>
				</div>
			))}
		</section>
	);
};

SecretsListView.displayName = 'SecretsListView';
SecretsListView.defaultProps = {};

export default React.memo(SecretsListView);
