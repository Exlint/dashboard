import React from 'react';
import { Outlet } from 'react-router-dom';
import type { PolicyLibrary } from '@prisma/client';

import Nav from '@/layout/Nav';

import Header from './Header';

import classes from './Policy.module.scss';

interface IProps {
	readonly groupLabel: string | null;
	readonly policyLabel: string | null;
	readonly library: PolicyLibrary | null;
	readonly onSetPolicyLabel: (value: string) => void;
}

const PolicyView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<Nav />
			<main className={classes['content']}>
				<Header
					groupLabel={props.groupLabel}
					policyLabel={props.policyLabel}
					library={props.library}
				/>

				<Outlet context={[props.policyLabel, props.onSetPolicyLabel]} />
			</main>
		</div>
	);
};

PolicyView.displayName = 'PolicyView';
PolicyView.defaultProps = {};

export default React.memo(PolicyView);
