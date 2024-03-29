import React from 'react';

import Intro from './Intro';
import FirstRow from './FirstRow';
import SecondRow from './SecondRow';

import classes from './QuickSetup.module.scss';

interface IProps {}

const QuickSetupView: React.FC<IProps> = () => {
	return (
		<section className={classes['container']}>
			<div className={classes['innerContainer']}>
				<Intro />
				<FirstRow />
				<SecondRow />
			</div>
		</section>
	);
};

QuickSetupView.displayName = 'QuickSetupView';
QuickSetupView.defaultProps = {};

export default React.memo(QuickSetupView);
