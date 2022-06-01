import React from 'react';
import VSvg from '@/ui/VSvg';

// import { Trans, useTranslation } from 'react-i18next';

import brandLogo from '../../../../../../../assets/images/brandLogo.png';

import classes from './NoPolicies.module.scss';

interface IProps {}

const NoPoliciesView: React.FC<IProps> = () => {
	// const { t } = useTranslation();

	return (
		<div className={classes['noPolicies']}>
			<div className={classes['innerNoPolicies']}>
				<h3 className={classes['innerNoPolicies__title']}>Create your first Policy</h3>
				<div className={classes['stepsContainer']}>
					<div className={classes['libraryStep']}>
						<div className={classes['iconsContainer']}>
							<img
								className={classes['iconsContainer__brandLogo']}
								src={brandLogo}
								alt="brand logo"
							/>
							<VSvg className={classes['iconsContainer__chooseLibrary']} name="chooseLibrary" />
						</div>
						<span className={classes['libraryStep__description']}>Choose a Library</span>
					</div>
					<VSvg className={classes['stepsContainer__arrowRight']} name="arrowRightPolicy" />
					<div className={classes['rulesStep']}>
						<VSvg className={classes['rulesStep__buildRules']} name="buildRules" />
						<span className={classes['rulesStep__text']}>
							Build your own rules
							<br />
							or choose a recommended policy
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

NoPoliciesView.displayName = 'NoPoliciesView';
NoPoliciesView.defaultProps = {};

export default React.memo(NoPoliciesView);
