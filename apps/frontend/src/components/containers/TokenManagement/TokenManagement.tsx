/* eslint-disable max-lines */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';

import EDSvg from '@/ui/EDSvg';
import { backendApi } from '@/utils/http';
import type { ISecrets } from '@/interfaces/secrets';
import type { IGetSecretsResponseData } from '@/interfaces/responses';

import TokenManagementView from './TokenManagement.view';

interface IProps {}

const TokenManagement: React.FC<IProps> = () => {
	const [tokenLabelState, setTokenLabelState] = useState<string>('DEFAULT_TOKEN');
	const [isModelOnViewState, setIsModelOnViewState] = useState<boolean>(false);
	const [clientIdState] = useState<string>('suidbfgsoudpihnevoiwehfwoefhui');
	const [copyClientIdState, setCopyClientIdState] = useState(false);
	const [secretsState, setSecretsState] = useState<ISecrets[]>([]);

	const formatDate = (unixDate: number) => {
		const date = new Date(unixDate);

		return new Intl.DateTimeFormat('en-gb', { dateStyle: 'full' }).format(date);
	};

	useEffect(() => {
		backendApi.get<IGetSecretsResponseData>('user/secrets').then((response) => {
			console.log(response.data.secrets);

			setSecretsState(() => response.data.secrets);
		});
	}, []);

	const onRevokeAll = () => {
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

	const columns = [
		{
			title: 'No.',
			dataIndex: 'number',
			key: 'number',
			width: 50,
		},
		{
			title: 'Label',
			dataIndex: 'label',
			key: 'label',
			width: 100,
		},
		{
			title: 'Created at',
			dataIndex: 'createdAt',
			key: 'createdAt',
			width: 150,
		},
		{
			title: 'Expires',
			dataIndex: 'expires',
			key: 'expires',
			width: 150,
		},
		{
			title: 'Refresh Secret',
			dataIndex: 'refreshSecret',
			key: 'refreshSecret',
			width: 100,
		},
		{
			title: 'Delete',
			dataIndex: 'delete',
			key: 'delete',
			width: 100,
		},
	];

	const data = secretsState.map((row, index) => {
		return {
			key: row.id,
			number: index + 1,
			label: [
				<>
					<span>{row.label}</span>
					<button type="button">
						<EDSvg
							style={{
								width: '17px',
								height: '17px',
								marginLeft: '7px',
								fill: 'none',
								stroke: '#8B8B8B',
								strokeWidth: '1.64427',
							}}
							name="editLabel"
						/>
					</button>
				</>,
			],
			createdAt: formatDate(row.createdAt),
			expires: formatDate(row.expiration),
			refreshSecret: (
				<EDSvg
					style={{
						width: '35px',
						height: '35px',
						margin: '0 auto',
						display: 'block',
						fill: '#8B8B8B',
					}}
					name="refreshSecret"
				/>
			),
			delete: (
				<EDSvg
					style={{
						width: '35px',
						height: '35px',
						margin: '0 auto',
						display: 'block',
						fill: '#8B8B8B',
					}}
					name="trashCanCircled"
				/>
			),
		};
	});

	return (
		<TokenManagementView
			data={data}
			columns={columns}
			isModelOnView={isModelOnViewState}
			clientIdState={clientIdState}
			copyClientIdState={copyClientIdState}
			tokenLabelState={tokenLabelState}
			secrets={secretsState}
			tokenLabelChangeHandler={tokenLabelChangeHandler}
			onRevokeAll={onRevokeAll}
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
