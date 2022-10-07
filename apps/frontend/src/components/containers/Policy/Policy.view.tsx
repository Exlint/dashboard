import React from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '@/layout/Nav';
import type { ILibraryName } from '@/interfaces/libraries';

import Header from './Header';

import classes from './Policy.module.scss';

interface IProps {
	readonly groupLabel: string | null;
	readonly policyLabel: string | null;
	readonly library: ILibraryName | null;
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
