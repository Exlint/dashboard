import React from 'react';

import EDSvg from '@/ui/EDSvg';
import { IPolicy } from '@/interfaces/policy';

import PoliciesListView from './PoliciesList.view';
import { ITableData } from './interfaces/table-data';

interface IProps {
	readonly groupPolicy: IPolicy[];
}

const PoliciesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const policiesTableColumns = [
		{
			title: '#',
			dataIndex: 'number',
			key: 'number',
			width: 50,
		},
		{
			title: 'Label',
			dataIndex: 'label',
			key: 'label',
			width: 150,
		},
		{
			title: 'Library',
			dataIndex: 'library',
			key: 'library',
			width: 150,
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
			width: 150,
		},
		{
			title: 'Num. of Rules',
			dataIndex: 'rulesNum',
			key: 'rulesNum',
			width: 150,
		},
		{
			title: 'Configurations',
			dataIndex: 'configurations',
			key: 'configurations',
			width: 150,
		},
		{
			title: '',
			dataIndex: '',
			key: 'operations',
			width: 150,

			// eslint-disable-next-line react/display-name, react/no-multi-comp
			render: () => <EDSvg name="arrowRight" style={{ fill: 'transparent', stroke: '#202428' }} />,
		},
	];

	const policiesTableData: ITableData[] = [];

	props.groupPolicy.map((policy, index) => {
		policiesTableData.push({
			number: index + 1,
			label: policy.label,
			library: policy.libraryName,
			category: 'amir',
			rulesNum: 2,
			configurations: 'configurations',
			key: index,
		});
	});

	return (
		<PoliciesListView
			groupPolicy={props.groupPolicy}
			policiesTableColumns={policiesTableColumns}
			policiesTableData={policiesTableData}
		/>
	);
};

PoliciesList.displayName = 'PoliciesList';
PoliciesList.defaultProps = {};

export default React.memo(PoliciesList);
