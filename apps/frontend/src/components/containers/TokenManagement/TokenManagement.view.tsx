/* eslint-disable max-lines */
import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import { concatClasses } from '@/utils/component';
import SettingsSidebar from '@/layout/SettingsSidebar';
import type { ISecrets } from '@/interfaces/secrets';

import TokenTable from './TokenTable';
import TokenModal from './TokenModal';

import classes from './TokenManagement.module.scss';

interface IProps {
	readonly id?: string;
	readonly secrets: ISecrets[] | null;
	readonly setSecrets: React.Dispatch<React.SetStateAction<ISecrets[] | null>>;
	readonly isModelOnView: boolean;
	readonly dispalyRightSideModal: boolean;
	readonly onDisplayModalRightSide: () => void;
	readonly copyClientIdState: boolean;
	readonly tokenLabelState: string | null;
	readonly onRevokeAllSecrets: () => void;
	readonly onRenderTable: () => void;
	readonly onChangeTokenLabel: (_: string) => void;
	readonly onCopyClientId: () => Promise<void>;
	readonly onOpenModal: () => void;
	readonly onCloseModal: () => void;
	readonly tokenLabelChangeHandler: (_: string) => void;
	readonly clientSecretState: string | null;
	readonly secretLabelState: string | null;
	readonly onSecretLabelChange: (_: string) => void;
	readonly onClientSecretChange: (_: string) => void;
}

const TokenManagementView: React.FC<IProps> = (props) => {
	const { t } = useTranslation();

	const copyClinetIdClasses = props.copyClientIdState
		? concatClasses(classes, 'idWrapper__icon', 'idWrapper__icon--disabled')
		: classes['idWrapper__icon'];

	return (
		<main className={classes['mainWrapper']}>
			<SettingsSidebar />
			<section className={classes['tokensDetalis']}>
				<div className={classes['clientIdWrapper']}>
					<span className={classes['clientIdWrapper__title']}>{t('tokenManagement.clientId')}</span>
					<div className={classes['idWrapper']}>
						<span className={classes['idWrapper__id']}>{props.id}</span>
						<EDSvg
							name="tokenClientId"
							className={copyClinetIdClasses}
							onClick={props.onCopyClientId}
						/>
					</div>
					{props.copyClientIdState && (
						<div className={classes['idWrapper__copied']}>{t('tokenManagement.copied')}</div>
					)}
				</div>
				<div className={classes['secretsWrapper']}>
					<div className={classes['secretsHeader']}>
						<span className={classes['secretsHeader__title']}>
							{t('tokenManagement.table.title')}
						</span>
						<div className={classes['buttonsWrapper']}>
							<button
								type="button"
								className={classes['revoke']}
								onClick={props.onRevokeAllSecrets}
							>
								<span className={classes['revoke__title']}>
									{t('tokenManagement.table.revokeAll')}
								</span>
								<EDSvg name="trashCan" className={classes['revoke__icon']} />
							</button>
							<button type="button" className={classes['create']} onClick={props.onOpenModal}>
								<span className={classes['create__title']}>
									{t('tokenManagement.table.createSecret')}
								</span>
							</button>
							{props.isModelOnView && (
								<TokenModal
									dispalyRightSideModal={props.dispalyRightSideModal}
									secretLabelState={props.secretLabelState}
									clientSecretState={props.clientSecretState}
									onDisplayModalRightSide={props.onDisplayModalRightSide}
									onCloseModal={props.onCloseModal}
									onRenderTable={props.onRenderTable}
									onSecretLabelChange={props.onSecretLabelChange}
									onClientSecretChange={props.onClientSecretChange}
								/>
							)}
						</div>
					</div>
					<TokenTable
						secrets={props.secrets}
						onRenderTable={props.onRenderTable}
						onSecretLabelChange={props.onSecretLabelChange}
						onClientSecretChange={props.onClientSecretChange}
						onOpenModal={props.onOpenModal}
						onDisplayModalRightSide={props.onDisplayModalRightSide}
					/>
					<div className={classes['footer']}>
						<span className={classes['footer__text']}>
							{t('tokenManagement.table.total')}
							&nbsp;
							{props.secrets && props.secrets.length}
						</span>
					</div>
				</div>
			</section>
		</main>
	);
};

TokenManagementView.displayName = 'TokenManagementView';
TokenManagementView.defaultProps = {};

export default React.memo(TokenManagementView);
