import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

import classes from './TokenManagement.module.scss';

interface IProps {}

const TokenManagementView: React.FC<IProps> = () => {
	// const { t } = useTranslation();

	return (
		<div className={classes['tokenManagement']}>
			<h1>THIS IS TOKEN MANAGMENT</h1>
		</div>
	);
};

TokenManagementView.displayName = 'TokenManagementView';
TokenManagementView.defaultProps = {};

export default React.memo(TokenManagementView);
