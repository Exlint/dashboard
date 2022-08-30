/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
/* eslint-disable max-lines */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { DefaultRecordType } from 'rc-table/lib/interface';

import EDSvg from '@/ui/EDSvg';
import { backendApi } from '@/utils/http';
import type { ITableData } from './interfaces/table-data';

import PolicyView from './Policy.view';

import classes from './Policy.module.scss';

const groupPolicy = [
	{
		'key': '111',
		'ruleName': 'dsds',
		'category': 'visbnivusv',
		'description': 'ubisubvs',
		'off/warn/error': 'fioaneofiea',
		'autofix': 'fbudifbsd',
	},
	{
		'key': '111',
		'ruleName': 'dsds',
		'category': 'visbnivusv',
		'description': 'ubisubvs',
		'off/warn/error': 'fioaneofiea',
		'autofix': 'fbudifbsd',
	},
];

interface IProps {}

const Policy: React.FC<IProps> = () => {
	const { policyId } = useParams();

	console.log(policyId);

	const [isModelOnViewState, setIsModelOnViewState] = useState<boolean>(false);
	const [rulesState, setRulesState] = useState([]);

	console.log(rulesState);

	const onOpenModal = () => setIsModelOnViewState(() => true);
	const onCloseModal = () => setIsModelOnViewState(() => false);

	const onRenderTable = () => {
		backendApi
			.get(`/user/inline-policies/rules/${policyId}`)
			.then((response) => setRulesState(() => response.data.secrets));
	};

	useEffect(() => onRenderTable(), []);

	const onRemoveRule = (id: string) => {
		console.log(id);
	};

	const policiesTableColumns = [
		{
			title: '#',
			dataIndex: 'number',
			key: 'number',
			width: 100,
		},
		{
			title: 'Rule Name',
			dataIndex: 'ruleName',
			key: 'ruleName',
			width: 240,
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
			width: 150,
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			width: 250,
		},
		{
			title: 'off/warn/error',
			dataIndex: 'off/warn/error',
			key: 'off/warn/error',
			width: 150,
		},
		{
			title: 'Rule Config',
			dataIndex: 'ruleConfig',
			key: 'ruleConfig',
			width: 150,
			render: (_: unknown, __: DefaultRecordType, index: number) => {
				console.log(index);

				return (
					<button type="button" onClick={() => onRemoveRule('sercretId')}>
						<EDSvg className={classes['configButtonIcon']} name="editPencil" />
					</button>
				);
			},
		},
		{
			title: 'File Config',
			dataIndex: 'fileConfig',
			key: 'fileConfig',
			width: 150,
			render: (_: unknown, __: DefaultRecordType, index: number) => {
				console.log(index);

				return (
					<button type="button" onClick={() => onRemoveRule('sercretId')}>
						<EDSvg className={classes['configButtonIcon']} name="editPencil" />
					</button>
				);
			},
		},
		{
			title: 'Autofix',
			dataIndex: 'autofix',
			key: 'autofix',
			width: 150,
			render: (_: unknown, __: DefaultRecordType, index: number) => {
				console.log(index);

				return (
					<div onClick={() => onRemoveRule('sercretId')}>
						<EDSvg className={classes['configButtonIcon']} name="vAutofix" />
					</div>
				);
			},
		},
		{
			title: (
				<Link
					to="/rule-onboarding"
					className={classes['newRuleButton']}
					type="button"
					onClick={() => 'ddd'}
				>
					New
					<EDSvg className={classes['newRuleButton__icon']} name="newRule" />
				</Link>
			),
			dataIndex: 'removeRule',
			key: 'removeRule',
			width: 150,
			render: (_: unknown, __: DefaultRecordType, index: number) => {
				console.log(index);

				return (
					<button
						className={classes['removeRuleButton']}
						type="button"
						onClick={() => onRemoveRule('sercretId')}
					>
						Remove
					</button>
				);
			},
		},
	];

	const policiesTableData: ITableData[] = [];

	groupPolicy.map((policy, index) => {
		policiesTableData.push({
			'key': policy.key,
			'number': `${index + 1}.`,
			'ruleName': policy.ruleName,
			'category': policy.category,
			'description': policy.description,
			'off/warn/error': policy['off/warn/error'],
			'autofix': policy.autofix,
		});
	});

	return (
		<PolicyView
			policiesTableColumns={policiesTableColumns}
			policiesTableData={policiesTableData}
			isModelOnView={isModelOnViewState}
			onOpenModal={onOpenModal}
			onCloseModal={onCloseModal}
		/>
	);
};

Policy.displayName = 'Policy';
Policy.defaultProps = {};

export default React.memo(Policy);
