/* eslint-disable max-lines */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import EDSvg from '@/ui/EDSvg';

import TokenManagementView from './TokenManagement.view';

interface IProps {}

const TokenManagement: React.FC<IProps> = () => {
	const [tokenLabelState, setTokenLabelState] = useState<string>('DEFAULT_TOKEN');
	const [editTokenLabelState, setEditTokenLabelState] = useState<boolean>(false);
	const [modalState, setModalState] = useState<boolean>(false);
	const [clientIdState] = useState<string>('suidbfgsoudpihnevoiwehfwoefhui');
	const [copyClientIdState, setCopyClientIdState] = useState(false);

	const onEditTokenLabel = () => {
		if (editTokenLabelState) {
			return setEditTokenLabelState(() => false);
		}

		return setEditTokenLabelState(() => true);
	};

	const tokenLabelChangeHandler = (input: string) => setTokenLabelState(() => input);

	const onBackdropClick = () => {
		if (modalState) {
			return setModalState(() => false);
		}

		return setModalState(() => true);
	};

	const onCopyClientId = async () => {
		setCopyClientIdState(() => true);

		await navigator.clipboard.writeText(clientIdState);

		return setTimeout(() => setCopyClientIdState(() => false), 2000);
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
				editTokenLabelState ? (
					<input
						style={{ fontSize: '1.7rem', color: '#8b8b8b', width: '70%' }}
						value={tokenLabelState}
						onChange={({ currentTarget: { value } }) => tokenLabelChangeHandler(value)}
					/>
				) : (
					tokenLabelState
				),
				<EDSvg
					name="editTokenName"
					style={{
						width: '17px',
						height: '17px',
						marginLeft: '7px',
						fill: 'none',
						stroke: '#8B8B8B',
						strokeWidth: '1.64427',
					}}
					onClick={onEditTokenLabel}
				/>,
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
			modalState={modalState}
			clientIdState={clientIdState}
			copyClientIdState={copyClientIdState}
			tokenLabelState={tokenLabelState}
			tokenLabelChangeHandler={tokenLabelChangeHandler}
			onBackdropClick={onBackdropClick}
			onCopyClientId={onCopyClientId}
		/>
	);
};

TokenManagement.displayName = 'TokenManagement';
TokenManagement.defaultProps = {};

export default React.memo(TokenManagement);
