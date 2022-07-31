import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import type { IPolicy } from '@/interfaces/policy';
import NoPolicies from './NoPolicies';

import PoliciesList from './PoliciesList';

import classes from './Policies.module.scss';

interface IProps {
	readonly groupPolicies: IPolicy[];
	readonly onNavigateToNewPolicy: () => void;
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
					<button
						type="button"
						className={classes['buttonContainer']}
						onClick={props.onNavigateToNewPolicy}
					>
						<span className={classes['buttonContainer__text']}>
							{t('groupCenter.groupDetails.policies.newPolicyButton')}
						</span>
						<EDSvg name="plus" className={classes['buttonContainer__icon']} />
					</button>
				</div>
			</div>
			{props.groupPolicies !== undefined && props.groupPolicies.length !== 0 ? (
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
