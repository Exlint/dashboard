import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

import classes from './Manually.module.scss';

interface IProps {}

const ManuallyView: React.FC<IProps> = () => {
	// const { t } = useTranslation();

	return (
		<section className={classes['manually']}>
			<div className={classes['innerManually']}>manually</div>
		</section>
	);
};

ManuallyView.displayName = 'ManuallyView';
ManuallyView.defaultProps = {};

export default React.memo(ManuallyView);
