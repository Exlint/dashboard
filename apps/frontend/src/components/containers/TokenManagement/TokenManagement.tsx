import React, { useEffect, useState } from 'react';

import { backendApi } from '@/utils/http';
import type { ISecrets } from '@/interfaces/secrets';
import type { IGetSecretsResponseData } from '@/interfaces/responses';

import TokenManagementView from './TokenManagement.view';

interface IProps {}

const TokenManagement: React.FC<IProps> = () => {
	const [secretsState, setSecretsState] = useState<ISecrets[] | null>(null);
	const [tokenLabelState, setTokenLabelState] = useState<string | null>(null);
	const [isModelOnViewState, setIsModelOnViewState] = useState<boolean>(false);
	const [clientIdState] = useState<string>('suidbfgsoudpihnevoiwehfwoefhui');
	const [copyClientIdState, setCopyClientIdState] = useState(false);

	useEffect(() => {
		backendApi.get<IGetSecretsResponseData>('user/secrets').then((response) => {
			setSecretsState(() => response.data.secrets);
		});
	}, []);

	const onRevokeAllSecrets = () => {
		backendApi.delete('/user/secrets').then(() => {
			setSecretsState(() => null);
		});
	};

	const onChangeGroupLabel = (label: string) => setTokenLabelState(() => label);

	const tokenLabelChangeHandler = (input: string) => setTokenLabelState(() => input);

	const onOpenModal = () => setIsModelOnViewState(() => true);
	const onCloseModal = () => setIsModelOnViewState(() => false);

	const onCopyClientId = async () => {
		setCopyClientIdState(() => true);

		await navigator.clipboard.writeText(clientIdState);

		setTimeout(() => setCopyClientIdState(() => false), 2000);
	};

	return (
		<TokenManagementView
			secrets={secretsState}
			isModelOnView={isModelOnViewState}
			clientIdState={clientIdState}
			copyClientIdState={copyClientIdState}
			tokenLabelState={tokenLabelState}
			tokenLabelChangeHandler={tokenLabelChangeHandler}
			onRevokeAllSecrets={onRevokeAllSecrets}
			onOpenModal={onOpenModal}
			onCloseModal={onCloseModal}
			onCopyClientId={onCopyClientId}
			onChangeGroupLabel={onChangeGroupLabel}
		/>
	);
};

TokenManagement.displayName = 'TokenManagement';
TokenManagement.defaultProps = {};

export default React.memo(TokenManagement);
