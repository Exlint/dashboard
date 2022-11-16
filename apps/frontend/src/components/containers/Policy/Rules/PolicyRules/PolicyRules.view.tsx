import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import type { PolicyLibrary } from '@prisma/client';
import type { IGetPolicyRulesResponseData, ILibraryData } from '@exlint-dashboard/common';

import EDBooleanButton from '@/ui/EDBooleanButton';
import EDAcceptButton from '@/ui/EDAcceptButton';
import EDTable from '@/ui/EDTable';
import { concatClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';

import Description from './Description';
import TablePlaceholder from './TablePlaceholder';
import BluePlaceholder from './BluePlaceholder';

import classes from './PolicyRules.module.scss';

interface IProps {
	readonly isFormConfiguration: boolean | null;
	readonly description: string | null;
	readonly library: PolicyLibrary | null;
	readonly types: ILibraryData['types'] | null;
	readonly categories: ILibraryData['categories'] | null;
	readonly policyCreationDate: number | null;
	readonly rulesData: IGetPolicyRulesResponseData['rules'];
	readonly rulesTotalCount: number;
	readonly onIsSwitchCheckedChange: (checked: boolean) => void;
	readonly onAddNewRuleClick: VoidFunction;
	readonly onRemoveRuleClick: (ruleId: string) => void;
	readonly onConfigureRule: (ruleId: string) => void;
}

const PolicyRulesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const tableColumns = [
		t('policy.rules.table.columns.ruleName'),
		t('policy.rules.table.columns.category'),
		t('policy.rules.table.columns.configuration'),
		<>
			<Trans>🛠</Trans>
			&nbsp;
			{t('policy.rules.table.columns.autofix')}
		</>,
		<span key={6} className={classes['rulesTableContainer__removeColumn']}>
			{t('policy.rules.table.columns.remove')}
		</span>,
	];

	const rulesData = props.rulesData.map((rule) => [
		rule.name,
		rule.category,
		<EDSvg
			key={rule.name}
			className={classes['editIcon']}
			name="editStroke"
			onClick={() => props.onConfigureRule(rule.id)}
		/>,
		rule.hasAutofix ? <EDSvg key={rule.name} className={classes['autofixIcon']} name="vStroke" /> : null,
		<EDSvg
			key={rule.name}
			className={classes['removeIcon']}
			name="circleRemove"
			onClick={() => props.onRemoveRuleClick(rule.id)}
		/>,
	]);

	return (
		<div className={classes['container']}>
			<div className={classes['dataContainer']}>
				<div className={classes['actionsContainer']}>
					<div className={classes['switchContainer']}>
						<EDBooleanButton
							checked={props.isFormConfiguration}
							onChange={props.onIsSwitchCheckedChange}
						/>
						<span className={classes['switchContainer__instructions']}>
							{t('policy.rules.switchInstruction')}
						</span>
					</div>

					<EDAcceptButton
						disabled={!props.isFormConfiguration}
						type="button"
						iconName="circleAdd"
						onClick={props.onAddNewRuleClick}
					>
						{t('policy.rules.new')}
					</EDAcceptButton>
				</div>

				<div
					className={concatClasses(
						classes,
						'rulesTableContainer',
						props.isFormConfiguration ? null : 'rulesTableContainer--blur',
					)}
				>
					<BluePlaceholder show={props.isFormConfiguration === false} />

					<EDTable
						className={classes['rulesTableContainer__table']}
						header={t('policy.rules.table.header')}
						columnsHeaders={tableColumns}
						data={rulesData}
						totalItems={props.rulesTotalCount}
						buttonIconName="circleAdd"
						noItemsPlaceholder={<TablePlaceholder />}
						blur={props.isFormConfiguration === false}
					/>
				</div>
			</div>

			<Description
				description={props.description}
				library={props.library}
				types={props.types}
				categories={props.categories}
				policyCreationDate={props.policyCreationDate}
			/>
		</div>
	);
};

PolicyRulesView.displayName = 'PolicyRulesView';
PolicyRulesView.defaultProps = {};

export default React.memo(PolicyRulesView);
