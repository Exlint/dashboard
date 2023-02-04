import React from 'react';

import MainView from './Main.view';

interface IProps {}

const Main: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <MainView>{props.children}</MainView>;
};

Main.displayName = 'Main';
Main.defaultProps = {};

export default React.memo(Main);
