/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
/* eslint-disable max-lines */
import React, { useState } from 'react';

import type { ITableData } from './interfaces/table-data';

import PolicyView from './Policy.view';

import classes from './Policy.module.scss';
import EDSvg from '@/ui/EDSvg';

interface IProps {}

const Policy: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	console.log(props);

	const [isModelOnViewState, setIsModelOnViewState] = useState<boolean>(false);

	const onOpenModal = () => setIsModelOnViewState(() => true);
	const onCloseModal = () => setIsModelOnViewState(() => false);

	const groupPolicy = [
		{
			id: 'dd',
			rules: 'dsds',
			key: '111',
			label: 'ubisubvs',
			libraryName: 'fioaneofiea',
			category: 'visbnivusv',
			rulesNum: 2,
			configurations: 'fbudifbsd',
		},
		{
			id: 'dd',
			rules: 'dsds',
			key: '111',
			label: 'ubisubvs',
			libraryName: 'fioaneofiea',
			category: 'visbnivusv',
			rulesNum: 2,
			configurations: 'fbudifbsd',
		},
	];

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
			width: 210,
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
		},
		{
			title: 'File Config',
			dataIndex: 'fileConfig',
			key: 'fileConfig',
			width: 150,
		},
		{
			title: 'off/warn/error',
			dataIndex: 'off/warn/error',
			key: 'off/warn/error',
			width: 150,
		},
		{
			title: 'Autofix',
			dataIndex: 'autofix',
			key: 'autofix',
			width: 150,
		},
		{
			title: (
				<button className={classes['newRuleButton']} type="button" onClick={() => 'ddd'}>
					New
					<EDSvg className={classes['newRuleButton__icon']} name="newRule" />
				</button>
			),
			dataIndex: 'autofix',
			key: 'autofix',
			width: 150,
		},
	];

	const policiesTableData: ITableData[] = [];

	groupPolicy.map((policy, index) => {
		policiesTableData.push({
			key: policy.id,
			number: `${index + 1}.`,
			label: policy.label,
			libraryName: policy.libraryName,
			category: policy.category,
			rulesNum: policy.rules ? Object.keys(policy.rules).length : 0,
			configurations: policy.id,
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
