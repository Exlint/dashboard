import React from 'react';
import { Link } from 'react-router-dom';
import { IGroup } from '@/interfaces/group';
import VSvg from '@/ui/VSvg';
// import { Trans, useTranslation } from 'react-i18next';

import NoPolicies from './NoPolicies';

import classes from './Policies.module.scss';

interface IProps {
	readonly selectedGroup: IGroup | null;
	readonly onCreateNewPolicy: () => void;
}

const PoliciesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<section className={classes['policies']}>
			<div className={classes['innerPolicies']}>
				<h3 className={classes['innerPolicies__title']}>Policies</h3>
				<div className={classes['policiesListHeader']}>
					<div className={classes['leftSideContainer']}>
						<span className={classes['leftSideContainer__orderNumber']}>#</span>
						<span className={classes['leftSideContainer__category']}>Label</span>
						<span className={classes['leftSideContainer__category']}>Library</span>
						<span className={classes['leftSideContainer__category']}>Category</span>
						<span className={classes['leftSideContainer__category']}>Num. of Rules</span>
					</div>
					<Link to="/groupCenter/group/newPolicy">
						<button
							type="button"
							className={classes['buttonContainer']}
							onClick={props.onCreateNewPolicy}
						>
							<span className={classes['buttonContainer__text']}>New</span>
							<VSvg name="plusIcon" className={classes['buttonContainer__icon']} />
						</button>
					</Link>
				</div>
			</div>
			<hr className={classes['dividerLine']} />
			<NoPolicies />
		</section>
	);
};

PoliciesView.displayName = 'PoliciesView';
PoliciesView.defaultProps = {};

export default React.memo(PoliciesView);
