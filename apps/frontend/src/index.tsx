import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/app';

import './i18n/config';
import './styles/custom.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);

export default root;
