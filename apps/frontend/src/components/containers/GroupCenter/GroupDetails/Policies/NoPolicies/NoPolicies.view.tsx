import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';

import brandLogo from '@/images/brand-logo.png';

import classes from './NoPolicies.module.scss';

interface IProps {}

const NoPoliciesView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['noPolicies']}>
			<div className={classes['tableHeaderContainer']}>
				<span className={classes['tableHeaderContainer__cell']}>
					{t('groupCenter.groupDetails.policies.noPolicies.order')}
				</span>
				<span className={classes['tableHeaderContainer__cell']}>
					{' '}
					{t('groupCenter.groupDetails.policies.noPolicies.label')}
				</span>
				<span className={classes['tableHeaderContainer__cell']}>
					{t('groupCenter.groupDetails.policies.noPolicies.library')}
				</span>
				<span className={classes['tableHeaderContainer__cell']}>
					{t('groupCenter.groupDetails.policies.noPolicies.category')}
				</span>
				<span className={classes['tableHeaderContainer__cell']}>
					{t('groupCenter.groupDetails.policies.noPolicies.numOfRules')}
				</span>
				<span className={classes['tableHeaderContainer__cell']}>
					{t('groupCenter.groupDetails.policies.noPolicies.configurations')}
				</span>
			</div>
			<hr className={classes['noPolicies__dividerLine']} />

			<div className={classes['innerNoPolicies']}>
				<h3 className={classes['innerNoPolicies__title']}>
					{t('groupCenter.groupDetails.policies.noPolicies.header')}
				</h3>
				<div className={classes['stepsContainer']}>
					<div className={classes['libraryStep']}>
						<div className={classes['iconsContainer']}>
							<img
								className={classes['iconsContainer__brandLogo']}
								src={brandLogo}
								alt="brand logo"
							/>
							<EDSvg
								className={classes['iconsContainer__chooseLibrary']}
								name="chooseLibrary"
							/>
						</div>
						<span className={classes['libraryStep__description']}>
							{t('groupCenter.groupDetails.policies.noPolicies.description')}
						</span>
					</div>
					<EDSvg className={classes['stepsContainer__arrowRight']} name="arrowRightPolicy" />
					<div className={classes['rulesStep']}>
						<EDSvg className={classes['rulesStep__buildRules']} name="buildRules" />
						<span className={classes['rulesStep__text']}>
							<Trans i18nKey="groupCenter.groupDetails.policies.noPolicies.rulesStep" />
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
