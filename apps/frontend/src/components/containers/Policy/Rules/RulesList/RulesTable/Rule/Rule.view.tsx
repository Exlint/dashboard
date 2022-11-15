import type { ILibraryRule } from '@exlint-dashboard/common';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import EDAcceptButton from '@/ui/EDAcceptButton';
import EDBooleanButton from '@/ui/EDBooleanButton';

import classes from './Rule.module.scss';

interface IProps {
	readonly name: string;
	readonly description: string;
	readonly category: ILibraryRule['category'];
	readonly isEnabled: boolean;
	readonly hasAutofix: boolean;
	readonly onDisableRule: VoidFunction;
	readonly onEnableRule: VoidFunction;
}

const RuleView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<div className={classes['ruleDetailsContainer']}>
				<div className={classes['ruleDetails']}>
					<span className={classes['ruleDetails__boldText']}>{props.name}</span>
					<span className={classes['ruleDetails__text']}>{props.description}</span>
				</div>

				<div className={classes['ruleDetails']}>
					<span className={classes['ruleDetails__boldText']}>{props.category}</span>
					{props.hasAutofix && (
						<span className={classes['ruleDetails__text']}>
							{t('policy.rulesList.ruleHasAutofix')}
							&nbsp;
							<Trans>🛠</Trans>
						</span>
					)}
				</div>
			</div>

			<div className={classes['ruleActionsContainer']}>
				<EDAcceptButton
					className={classes['ruleActionsContainer__button']}
					textClassName={classes['ruleActionsContainer__buttonText']}
					iconClassName={classes['ruleActionsContainer__buttonIcon']}
					iconName="configurations"
					type="button"
					disabled={false}
					switchElementsOrder
					onClick={props.onEnableRule}
				>
					{t('policy.rulesList.configureRule')}
				</EDAcceptButton>

				<EDBooleanButton
					checked={props.isEnabled}
					onChange={(checked) => (checked ? props.onEnableRule() : props.onDisableRule())}
				/>
			</div>
		</div>
	);
};

RuleView.displayName = 'RuleView';
RuleView.defaultProps = {};

export default React.memo(RuleView);
