import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/layout/Header';
import GroupCenter from './components/containers/GroupCenter';

function App() {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Route path="/groupCenter">
					<GroupCenter />
				</Route>
			</main>
		</>
	);
}

export default App;
