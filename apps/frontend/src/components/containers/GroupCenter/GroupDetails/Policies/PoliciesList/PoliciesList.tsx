import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LibraryCategory } from '@/models/library-category';
import { librariesData } from '@/data/libraries-data';
import EDSvg from '@/ui/EDSvg';
import logosObject from '@/utils/libraries-logos';
import type { ILibraryData, IPolicyData } from '@/interfaces/libraries';

import PoliciesListView from './PoliciesList.view';
import type { ITableData } from './interfaces/table-data';

import classes from './PoliciesList.module.scss';

interface IProps {
	readonly groupPolicy: IPolicyData[];
}

const PoliciesList: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const onNavigateToPolicyRules = (policyId: string) => {
		navigate(`/group-center/policy/${policyId}/rules`);
	};

	const onNavigateToPolicyConfig = (policyId: string) => {
		navigate(`/policy-configuration/${policyId}/edit`);
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
			render: (_: string, __: string, index: number) => {
				const libraryName = props.groupPolicy[index]!.library;

				const libraryNameInLowerCase = libraryName.toLocaleLowerCase() as Lowercase<
					ILibraryData['name']
				>;

				return (
					<div className={classes['libraryNameContainer']}>
						<img
							className={classes['libraryNameContainer__logo']}
							src={logosObject[libraryNameInLowerCase]}
							alt="library logo"
						/>
						<span className={classes['libraryNameContainer__name']}>{libraryName}</span>
					</div>
				);
			},
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
			render: (_: string, __: string, index: number) => {
				const policyId = props.groupPolicy[index]!.id ?? '';

				return (
					<button
						className={classes['editConfigurationsButton']}
						type="button"
						onClick={() => onNavigateToPolicyConfig(policyId)}
					>
						{t('groupCenter.groupDetails.policies.policiesList.editConfig')}
					</button>
				);
			},
		},
		{
			title: '',
			dataIndex: '',
			key: 'operations',
			width: 150,

			render: (_: string, __: string, index: number) => {
				const policyId = props.groupPolicy[index]!.id.toString();

				return (
					<button
						className={classes['goToRulesButton']}
						type="button"
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
		let libraryCategory: LibraryCategory[] = [];

		const libraryNameInLowerCase = policy.library
			? (policy.library.toLocaleLowerCase() as Lowercase<ILibraryData['name']>)
			: null;

		if (libraryNameInLowerCase) {
			libraryCategory = librariesData[libraryNameInLowerCase].category;
		}

		policiesTableData.push({
			key: policy.id,
			number: `${index + 1}.`,
			label: policy.label,
			libraryName: policy.library,
			category: LibraryCategory[libraryCategory[0]!] ?? '',
			rulesNum: policy.rules ? Object.keys(policy.rules).length : 0,
			configurations: policy.id,
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
