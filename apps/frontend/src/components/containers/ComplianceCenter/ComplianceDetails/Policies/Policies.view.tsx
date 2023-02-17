import React from 'react';
import { useTranslation } from 'react-i18next';
import TextareaAutosize from 'react-textarea-autosize';

import EDSvg from '@/ui/EDSvg';
import EDTable from '@/ui/EDTable';
import logosObject from '@/utils/libraries-logos';

import TablePlaceholder from './TablePlaceholder';
import type { IPolicy } from './policy';

import classes from './Policies.module.scss';

interface IProps {
	readonly policies: IPolicy[];
	readonly descriptionInput: string | null;
	readonly isDescriptionOnEdit: boolean;
	readonly totalInlinePolicies: number;
	readonly descriptionInputChange: (value: string) => void;
	readonly onEditIconClick: VoidFunction;
	readonly onConfirmNewEditClick: VoidFunction;
	readonly onCreateNewPolicy: VoidFunction;
}

const PoliciesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const tableColumns = [
		t('complianceCenter.policies.table.columns.label'),
		t('complianceCenter.policies.table.columns.library'),
		t('complianceCenter.policies.table.columns.language'),
	];

	const policiesData = props.policies.map((policy) => [
		policy.label,
		<div key={policy.id} className={classes['policyLibraryContainer']}>
			<img
				className={classes['policyLibraryContainer__img']}
				src={logosObject[policy.library.toLowerCase() as keyof typeof logosObject]}
				alt={policy.library}
			/>
			<span>{policy.library}</span>
		</div>,
		policy.language,
	]);

	const policiesLinks = props.policies.map((policy) => policy.id);

	return (
		<div className={classes['container']}>
			<EDTable
				className={classes['policiesTable']}
				header={t('complianceCenter.policies.table.header')}
				buttonText={t('complianceCenter.policies.table.newButton')}
				columnsHeaders={tableColumns}
				data={policiesData}
				dataLinks={policiesLinks}
				totalItems={props.totalInlinePolicies}
				buttonIconName="circleAdd"
				noItemsPlaceholder={<TablePlaceholder />}
				onButtonClick={props.onCreateNewPolicy}
			/>

			<div className={classes['descriptionContainer']}>
				<div className={classes['descriptionHeader']}>
					<h4 className={classes['descriptionHeader__text']}>
						{t('complianceCenter.policies.aboutHeader')}
					</h4>
					<EDSvg
						className={classes['descriptionHeader__icon']}
						name={props.isDescriptionOnEdit ? 'vCircle' : 'editStroke'}
						onClick={
							props.isDescriptionOnEdit ? props.onConfirmNewEditClick : props.onEditIconClick
						}
					/>
				</div>

				<TextareaAutosize
					className={classes['descriptionContainer__textarea']}
					value={props.descriptionInput ?? ''}
					placeholder={t('complianceCenter.policies.descriptionPlaceholder')}
					readOnly={!props.isDescriptionOnEdit}
					maxRows={15}
					onChange={({ currentTarget: { value } }) => props.descriptionInputChange(value)}
				/>
			</div>
		</div>
	);
};

PoliciesView.displayName = 'PoliciesView';
PoliciesView.defaultProps = {};

export default React.memo(PoliciesView);
