import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import type { AppState } from '@/store/app';
import { backendApi } from '@/utils/http';
import type { ISecrets } from '@/interfaces/secrets';
import type { IGetSecretsResponseData } from '@/interfaces/responses';

import TokenManagementView from './TokenManagement.view';

interface IPropsFromState {
	readonly id?: string;
}

interface IProps extends IPropsFromState {}

const TokenManagement: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [secretLabelState, setSecretLabelState] = useState<string | null>(null);
	const [clientSecretState, setClientSecretState] = useState<string | null>(null);
	const [secretsState, setSecretsState] = useState<ISecrets[] | null>(null);
	const [tokenLabelState, setTokenLabelState] = useState<string | null>(null);
	const [dispalyRightSideModalState, setDispalyRightSideModalState] = useState<boolean>(false);
	const [isModelOnViewState, setIsModelOnViewState] = useState<boolean>(false);
	const [copyClientIdState, setCopyClientIdState] = useState<boolean>(false);

	const onDisplayModalRightSide = () => setDispalyRightSideModalState(() => true);
	const onClientSecretChange = (value: string) => setClientSecretState(() => value);
	const onSecretLabelChange = (value: string) => setSecretLabelState(() => value);

	const onRenderTable = () => {
		backendApi
			.get<IGetSecretsResponseData>('user/secrets')
			.then((response) => setSecretsState(() => response.data.secrets));
	};

	useEffect(() => onRenderTable(), []);

	const onRevokeAllSecrets = () => {
		backendApi.delete('/user/secrets').then(() => {
			setSecretsState(() => null);
		});
	};

	const onChangeTokenLabel = (value: string) => setTokenLabelState(() => value);

	const tokenLabelChangeHandler = (value: string) => setTokenLabelState(() => value);

	const onOpenModal = () => setIsModelOnViewState(() => true);

	const onCloseModal = () => {
		setSecretLabelState(() => null);
		setClientSecretState(() => null);
		setDispalyRightSideModalState(() => false);
		setIsModelOnViewState(() => false);
	};

	const onCopyClientId = async () => {
		setCopyClientIdState(() => true);

		await navigator.clipboard.writeText(props.id!);

		setTimeout(() => setCopyClientIdState(() => false), 2000);
	};

	return (
		<TokenManagementView
			id={props.id}
			secrets={secretsState}
			setSecrets={setSecretsState}
			dispalyRightSideModal={dispalyRightSideModalState}
			isModelOnView={isModelOnViewState}
			copyClientIdState={copyClientIdState}
			tokenLabelState={tokenLabelState}
			tokenLabelChangeHandler={tokenLabelChangeHandler}
			onRevokeAllSecrets={onRevokeAllSecrets}
			onRenderTable={onRenderTable}
			onDisplayModalRightSide={onDisplayModalRightSide}
			onOpenModal={onOpenModal}
			onCloseModal={onCloseModal}
			onCopyClientId={onCopyClientId}
			onChangeTokenLabel={onChangeTokenLabel}
			clientSecretState={clientSecretState}
			secretLabelState={secretLabelState}
			onSecretLabelChange={onSecretLabelChange}
			onClientSecretChange={onClientSecretChange}
		/>
	);
};

TokenManagement.displayName = 'TokenManagement';
TokenManagement.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		id: state.auth.id!,
	};
};

export default connect(mapStateToProps)(React.memo(TokenManagement));
