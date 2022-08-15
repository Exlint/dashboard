import React, { useState } from 'react';

import { backendApi } from '@/utils/http';

import TokenManagementView from './TokenManagement.view';

interface IProps {}

const TokenManagement: React.FC<IProps> = () => {
	const [tokenLabelState, setTokenLabelState] = useState<string>('DEFAULT_TOKEN');
	const [isModelOnViewState, setIsModelOnViewState] = useState<boolean>(false);
	const [clientIdState] = useState<string>('suidbfgsoudpihnevoiwehfwoefhui');
	const [copyClientIdState, setCopyClientIdState] = useState(false);

	const onRevokeAllSecrets = () => {
		backendApi.delete('user/secrets').then(() => {
			console.log('success');
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
