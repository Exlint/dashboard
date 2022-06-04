import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

import classes from './Recommended.module.scss';

interface IProps {}

const RecommendedView: React.FC<IProps> = () => {
	// const { t } = useTranslation();

	return (
		<section className={classes['recommended']}>
			<h1 className={classes['innerRecommended']}>Recommended</h1>
		</section>
	);
};

RecommendedView.displayName = 'RecommendedView';
RecommendedView.defaultProps = {};

export default React.memo(RecommendedView);
