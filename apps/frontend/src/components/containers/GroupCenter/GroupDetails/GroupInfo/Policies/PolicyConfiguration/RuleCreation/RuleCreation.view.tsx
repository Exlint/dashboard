import React from 'react';
import { Link } from 'react-router-dom';
import VSvg from '@/ui/VSvg';

// import { Trans, useTranslation } from 'react-i18next';

import classes from './RuleCreation.module.scss';

interface IProps {
	readonly policyLabelInput: string | null;
}

const RuleCreationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<section className={classes['ruleCration']}>
			<div className={classes['innerRuleCreation']}>
				<div className={classes['titleContainer']}>
					<h3 className={classes['titleContainer__text']}>{props.policyLabelInput}</h3>
					&nbsp;
					<h3 className={classes['titleContainer__text']}>- Rule Creation</h3>
				</div>
				<div className={classes['creationOptionsContainer']}>
					<span className={classes['creationOptionsContainer__title']}>I want to...</span>
					<div className={classes['innerOptions']}>
						<button className={classes['option']} type="button">
							<span className={classes['option__description']}>
								Manually create and configure rules
							</span>
							<VSvg className={classes['option__manuallyIcon']} name="ruleCreationManually" />
						</button>
						<button className={classes['option']} type="button">
							<span className={classes['option__description']}>
								Use the library`s recommended rule policy
							</span>
							<VSvg
								className={classes['option__recommendedIcon']}
								name="ruleCreationRecommended"
							/>
						</button>
						<Link
							className={classes['option']}
							to="/groupCenter/group/Policy/ruleOnboarding/file"
						>
							<span className={classes['option__description']}>
								Input rules in a file format(yaml, jsfile, json)
							</span>
							<VSvg
								className={classes['option__fileFormatIcon']}
								name="ruleCreationFileFormat"
							/>
						</Link>
					</div>
				</div>
				<div className={classes['doThisLaterButtonContainer']}>
					<button className={classes['doThisLaterButtonContainer__button']} type="button">
						I`ll do this later
					</button>
				</div>
			</div>
		</section>
	);
};

RuleCreationView.displayName = 'RuleCreationView';
RuleCreationView.defaultProps = {};

export default React.memo(RuleCreationView);
