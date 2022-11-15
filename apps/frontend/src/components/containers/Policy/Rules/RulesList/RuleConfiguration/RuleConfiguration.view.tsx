import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import type { Prisma } from '@prisma/client';

import EDAcceptButton from '@/ui/EDAcceptButton';

import classes from './RuleConfiguration.module.scss';

interface IProps {
	readonly selectedRuleConfiguration?: Prisma.JsonArray | null;
}

const RuleConfigurationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<form className={classes['container']}>
			<div className={classes['header']}>
				<h5 className={classes['header__text']}>{t('policy.rulesList.ruleConfigurations.title')}</h5>

				<EDAcceptButton disabled type="submit">
					{t('policy.rulesList.ruleConfigurations.saveConfiguration')}
				</EDAcceptButton>
			</div>

			{props.selectedRuleConfiguration === undefined && (
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
