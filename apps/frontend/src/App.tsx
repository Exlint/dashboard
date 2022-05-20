import React from 'react';

import AppView from './App.view';

interface Props {}

const App: React.FC<Props> = () => {
	return <AppView />;
};

App.displayName = 'App';
App.defaultProps = {};

export default React.memo(App);
