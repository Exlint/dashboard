/* eslint-disable max-lines */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';

import EDSvg from '@/ui/EDSvg';
import { backendApi } from '@/utils/http';
import type { ISecretsResponseData } from '@/interfaces/responses';

import TokenManagementView from './TokenManagement.view';

interface IProps {}

const TokenManagement: React.FC<IProps> = () => {
	const [tokenLabelState, setTokenLabelState] = useState<string>('DEFAULT_TOKEN');
	const [isModelOnViewState, setIsModelOnViewState] = useState<boolean>(false);
	const [clientIdState] = useState<string>('suidbfgsoudpihnevoiwehfwoefhui');
	const [copyClientIdState, setCopyClientIdState] = useState(false);

	useEffect(() => {
		backendApi
			.get<ISecretsResponseData>('user/secrets')
			.then((response: AxiosResponse<ISecretsResponseData>) => {
				console.log(response);
			});
	});

	const onRevokeAll = () => {
		backendApi.delete('user/secrets/all');
	};

	const onChangeGroupLabel = (label: string) => {
		if (label.length > 0 && label.length <= 20) {
			setTokenLabelState(() => label);
		}
	};

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

	const data = [
		{
			number: 1,
			label: [
				<>
					<span>{tokenLabelState}</span>
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
			createdAt: 'Saturday 14th May 2022',
			expires: 'Saturday 15th May 2022 13:40',
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
			key: '1',
		},
	];

	return (
		<TokenManagementView
			data={data}
			columns={columns}
			isModelOnView={isModelOnViewState}
			clientIdState={clientIdState}
			copyClientIdState={copyClientIdState}
			tokenLabelState={tokenLabelState}
			onRevokeAll={onRevokeAll}
			tokenLabelChangeHandler={tokenLabelChangeHandler}
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
