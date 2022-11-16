import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import type { Prisma } from '@prisma/client';

import EDAcceptButton from '@/ui/EDAcceptButton';
import { concatClasses } from '@/utils/component';

import classes from './RuleConfiguration.module.scss';

interface IProps {
	readonly ruleId: string | null;
	readonly ruleName: string | null;
	readonly ruleConfiguration: Prisma.JsonArray | null;
}

const RuleConfigurationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const isRuleSelected = props.ruleId !== null;

	const containerClasses = concatClasses(
		classes,
		'container',
		isRuleSelected ? 'container--selected' : null,
	);

	return (
		<form className={containerClasses}>
			<div className={classes['header']}>
				{isRuleSelected ? (
					<div className={classes['headerTextContainer']}>
						<h5 className={classes['headerTextContainer__name']}>{props.ruleName}</h5>
						<span className={classes['headerTextContainer__instruction']}>
							{t('policy.rulesList.ruleConfigurations.title')}
						</span>
					</div>
				) : (
					<h5 className={classes['header__text']}>
						{t('policy.rulesList.ruleConfigurations.title')}
					</h5>
				)}

				<EDAcceptButton disabled type="submit">
					{t('policy.rulesList.ruleConfigurations.saveConfiguration')}
				</EDAcceptButton>
			</div>

			{isRuleSelected && (
				<div className={classes['instructionContainer']}>
					<span className={classes['instructionContainer__text']}>
						<Trans>{t('policy.rulesList.ruleConfigurations.instruction')}</Trans>
					</span>

					<EDAcceptButton
						disabled
						type="button"
						iconName="configurations"
						switchElementsOrder
						iconClassName={classes['instructionContainer__icon']}
					>
						{t('policy.rulesList.ruleConfigurations.configureRule')}
					</EDAcceptButton>
				</div>
			)}
		</form>
	);
};

RuleConfigurationView.displayName = 'RuleConfigurationView';
RuleConfigurationView.defaultProps = {};

export default React.memo(RuleConfigurationView);
