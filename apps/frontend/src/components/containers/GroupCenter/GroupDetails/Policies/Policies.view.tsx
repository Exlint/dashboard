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
				<div className={classes['headerContainer']}>
					<h3 className={classes['headerContainer__title']}>
						{t('groupCenter.groupDetails.policies.header')}
					</h3>
					<Link to="/group-center/new-policy/" className={classes['buttonContainer']}>
						<span className={classes['buttonContainer__text']}>
							{t('groupCenter.groupDetails.policies.newPolicyButton')}
						</span>
						<EDSvg name="plusIcon" className={classes['buttonContainer__icon']} />
					</Link>
				</div>
			</div>
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
