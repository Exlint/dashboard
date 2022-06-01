import React from 'react';
import { Link } from 'react-router-dom';
import VSvg from '@/ui/VSvg';
// import { Trans, useTranslation } from 'react-i18next';

import classes from './NewPolicyConfiguration.module.scss';

interface IProps {
	readonly policyLabelInput: string | null;
}

const NewPolicyConfigurationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<section className={classes['newPolicyConfiguration']}>
			<div className={classes['innerNewPolicyConfiguration']}>
				<div className={classes['headerContainer']}>
					<div className={classes['titleContainer']}>
						<h3 className={classes['titleContainer__text']}>{props.policyLabelInput}</h3>
						&nbsp;
						<h3 className={classes['titleContainer__text']}>- Policy Configurations</h3>
					</div>
					<Link to="/groupCenter/group/Policy/ruleOnboarding">
						<button className={classes['ruleCreationButton']} type="button">
							<span className={classes['ruleCreationButton__text']}>
								Continue to Rule Creation
							</span>
							<VSvg className={classes['ruleCreationButton__icon']} name="vIcon" />
						</button>
					</Link>
				</div>
				<hr className={classes['dividerLine']} />
			</div>
		</section>
	);
};

NewPolicyConfigurationView.displayName = 'NewPolicyConfigurationView';
NewPolicyConfigurationView.defaultProps = {};

export default React.memo(NewPolicyConfigurationView);
