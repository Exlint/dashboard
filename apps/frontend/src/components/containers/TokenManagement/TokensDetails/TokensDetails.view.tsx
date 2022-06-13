import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

import classes from './TokensDetails.module.scss';

interface IProps {}

const TokensDetailsView: React.FC<IProps> = () => {
	// const { t } = useTranslation();

	return (
		<section className={classes['tokensDetalis']}>
			<div className={classes['innerTokensDetalis']}>
				<span>Token Detalis</span>
			</div>
		</section>
	);
};

TokensDetailsView.displayName = 'TokensDetailsView';
TokensDetailsView.defaultProps = {};

export default React.memo(TokensDetailsView);
