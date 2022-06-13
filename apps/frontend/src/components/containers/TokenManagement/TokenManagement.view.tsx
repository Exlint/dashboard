import React from 'react';
import Sidebar from './Sidebar';
// import { Trans, useTranslation } from 'react-i18next';

import classes from './TokenManagement.module.scss';
import TokensDetails from './TokensDetails';

interface IProps {}

const TokenManagementView: React.FC<IProps> = () => {
	// const { t } = useTranslation();

	return (
		<div className={classes['tokenManagement']}>
			<Sidebar />
			<TokensDetails />
		</div>
	);
};

TokenManagementView.displayName = 'TokenManagementView';
TokenManagementView.defaultProps = {};

export default React.memo(TokenManagementView);
