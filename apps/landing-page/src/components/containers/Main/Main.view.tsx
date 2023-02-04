import React from 'react';

import Intro from './Intro';
import Transition from './Transition';
import LibrariesBox from './LibrariesBox';
import QuickSetup from './QuickSetup';
import EmpowerEfficient from './EmpowerEfficient';
import OpenSource from './OpenSource';
import Faq from './Faq';

import classes from './Main.module.scss';

interface IProps {}

const MainView: React.FC<IProps> = () => {
	return (
		<main className={classes['container']}>
			<Intro />
			<Transition />
			<LibrariesBox />
			<QuickSetup />
			<EmpowerEfficient />
			<OpenSource />
			<Faq />
		</main>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
