import React from 'react';

import Auth from '@/containers/Auth';
import Page from '@/helpers/Page';

interface IProps {}

const AuthPage: React.FC<IProps> = () => {
	return (
		<Page>
			<Auth />
		</Page>
	);
};

AuthPage.displayName = 'AuthPage';
AuthPage.defaultProps = {};

export default AuthPage;
