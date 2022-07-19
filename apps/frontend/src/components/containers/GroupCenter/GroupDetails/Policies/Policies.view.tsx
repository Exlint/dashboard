import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import { IPolicy } from '@/interfaces/policy';
import NoPolicies from './NoPolicies';

import PoliciesList from './PoliciesList';

import classes from './Policies.module.scss';

interface IProps {
	readonly groupPolicies: IPolicy[];
}

const PoliciesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<section className={classes['policies']}>
			<div className={classes['innerPolicies']}>
				<h3 className={classes['innerPolicies__title']}>
					{t('groupCenter.groupDetails.policies.header')}
				</h3>
				<div className={classes['policiesListHeader']}>
					<div className={classes['leftSideContainer']}>
						<span className={classes['leftSideContainer__orderNumber']}>
							{t('groupCenter.groupDetails.policies.orderNumber')}
						</span>
						<span className={classes['leftSideContainer__category']}>
							{t('groupCenter.groupDetails.policies.label')}
						</span>
						<span className={classes['leftSideContainer__category']}>
							{t('groupCenter.groupDetails.policies.library')}
						</span>
						<span className={classes['leftSideContainer__category']}>
							{t('groupCenter.groupDetails.policies.category')}
						</span>
						<span className={classes['leftSideContainer__category']}>
							{t('groupCenter.groupDetails.policies.numberOfRules')}
						</span>
					</div>
					<Link to="/group-center/new-policy/" className={classes['buttonContainer']}>
						<span className={classes['buttonContainer__text']}>
							{t('groupCenter.groupDetails.policies.newPolicyButton')}
						</span>
						<EDSvg name="plusIcon" className={classes['buttonContainer__icon']} />
					</Link>
				</div>
			</div>
			<hr className={classes['dividerLine']} />
			{props.groupPolicies.length > 0 ? (
				<PoliciesList groupPolicy={props.groupPolicies} />
			) : (
				<NoPolicies />
			)}
		</section>
	);
};

PoliciesView.displayName = 'PoliciesView';
PoliciesView.defaultProps = {};

export default React.memo(PoliciesView);
