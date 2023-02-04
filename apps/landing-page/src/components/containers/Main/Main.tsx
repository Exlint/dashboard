import React from 'react';

import MainView from './Main.view';

interface IProps {}

const Main: React.FC<IProps> = () => {
	return <MainView />;
};

Main.displayName = 'Main';
Main.defaultProps = {};

export default React.memo(Main);
