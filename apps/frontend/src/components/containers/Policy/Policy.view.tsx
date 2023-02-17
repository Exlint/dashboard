import React from 'react';
import { Outlet } from 'react-router-dom';
import type { PolicyLibrary } from '@prisma/client';

import Nav from '@/layout/Nav';

import Header from './Header';

import classes from './Policy.module.scss';

interface IProps {
	readonly complianceLabel: string | null;
	readonly policyLabel: string | null;
	readonly library: PolicyLibrary | null;
	readonly hasRules: boolean | null;
	readonly onSetPolicyLabel: (value: string) => void;
}

const PolicyView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<Nav />
			<main className={classes['content']}>
				{props.hasRules !== null && (
					<Header
						complianceLabel={props.complianceLabel}
						policyLabel={props.policyLabel}
						library={props.library}
						hasRules={props.hasRules}
					/>
				)}

				{props.hasRules !== null && (
					<Outlet
						context={[props.policyLabel, props.onSetPolicyLabel, props.library, props.hasRules]}
					/>
				)}
			</main>
		</div>
	);
};

PolicyView.displayName = 'PolicyView';
PolicyView.defaultProps = {};

export default React.memo(PolicyView);
