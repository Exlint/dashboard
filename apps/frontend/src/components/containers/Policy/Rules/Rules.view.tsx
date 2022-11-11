import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import type { PolicyLibrary } from '@prisma/client';
import type { ILibraryData } from '@exlint-dashboard/common';

import EDBooleanButton from '@/ui/EDBooleanButton';
import EDAcceptButton from '@/ui/EDAcceptButton';
import EDTable from '@/ui/EDTable';
import { concatClasses } from '@/utils/component';

import Description from './Description';
import TablePlaceholder from './TablePlaceholder';
import BluePlaceholder from './BluePlaceholder';

import classes from './Rules.module.scss';

interface IProps {
	readonly isFormConfiguration: boolean | null;
	readonly description: string | null;
	readonly library: PolicyLibrary | null;
	readonly types: ILibraryData['types'] | null;
	readonly categories: ILibraryData['categories'] | null;
	readonly policyCreationDate: number | null;
	readonly onIsSwitchCheckedChange: (checked: boolean) => void;
	readonly onAddNewRuleClick: VoidFunction;
}

const RulesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const tableColumns = [
		t('policy.rules.table.columns.ruleName'),
		t('policy.rules.table.columns.category'),
		t('policy.rules.table.columns.alertType'),
		t('policy.rules.table.columns.configuration'),
		<>
			<Trans>🛠</Trans>
			&nbsp;
			{t('policy.rules.table.columns.autofix')}
		</>,
		<span key={6} className={classes['rulesTable__removeColumn']}>
			{t('policy.rules.table.columns.remove')}
		</span>,
	];

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
						data={[]}
						dataLinks={[]}
						totalItems={0}
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

RulesView.displayName = 'RulesView';
RulesView.defaultProps = {};

export default React.memo(RulesView);
