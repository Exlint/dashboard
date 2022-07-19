import React from 'react';

import { IPolicy } from '@/interfaces/policy';

import classes from './PoliciesList.module.scss';

interface IProps {
	readonly groupPolicy: IPolicy[];
}

const PoliciesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['policiesList']}>
			{props.groupPolicy.map((policy) => (
				<div key={policy.id}>
					<span>{policy.label}</span>
				</div>
			))}
		</div>
	);
};

PoliciesListView.displayName = 'PoliciesListView';
PoliciesListView.defaultProps = {};

export default React.memo(PoliciesListView);
