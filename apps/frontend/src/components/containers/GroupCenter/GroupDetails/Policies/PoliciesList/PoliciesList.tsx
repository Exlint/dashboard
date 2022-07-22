/* eslint-disable max-lines */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import EDSvg from '@/ui/EDSvg';
import { IPolicy } from '@/interfaces/policy';

import PoliciesListView from './PoliciesList.view';
import { ITableData } from './interfaces/table-data';

interface IProps {
	readonly groupPolicy: IPolicy[];
}

const PoliciesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const onNavigateToPolicyRules = (policyId: string) => {
		navigate(`/group-center/policy/policyId:${policyId}/rules`);
	};

	const onNavigateToPolicyConfig = (policyId: string) => {
		navigate(`/group-center/policy/:poilcy-id${policyId}/edit-config`);
	};

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
			// eslint-disable-next-line react/display-name, react/no-multi-comp
			render: (_: string, __: string, index: number) => {
				const policyId = props.groupPolicy[index]!.id.toString();

				return (
					<button
						type="button"
						style={{
							color: 'rgba(122, 77, 243, 1)',
							fontSize: '1.7rem',
							textDecoration: 'underline',
						}}
						onClick={() => onNavigateToPolicyConfig(policyId)}
					>
						Edit Config
					</button>
				);
			},
		},
		{
			title: '',
			dataIndex: '',
			key: 'operations',
			width: 150,

			// eslint-disable-next-line react/display-name, react/no-multi-comp
			render: (_: string, __: string, index: number) => {
				const policyId = props.groupPolicy[index]!.id.toString();

				return (
					<button
						type="button"
						style={{
							verticalAlign: 'middle',
						}}
						onClick={() => onNavigateToPolicyRules(policyId)}
					>
						<EDSvg
							name="arrowRight"
							style={{ fill: 'transparent', stroke: '#202428', marginRight: '20px' }}
						/>
					</button>
				);
			},
		},
	];

	const policiesTableData: ITableData[] = [];

	props.groupPolicy.map((policy, index) => {
		policiesTableData.push({
			number: `${index + 1}.`,
			label: policy.label,
			library: policy.libraryName,
			category: 'amir',
			rulesNum: 2,
			configurations: policy.id,
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
