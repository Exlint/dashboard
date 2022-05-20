import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

import classes from './GroupDetails.module.scss';

interface IProps {}

const GroupDetailsView: React.FC<IProps> = () => {
	// const { t } = useTranslation();

	return (
		<section className={classes['groupDetails']}>
			<div className={classes['innerGroupDetails']}></div>
		</section>
	);
};

GroupDetailsView.displayName = 'GroupDetailsView';
GroupDetailsView.defaultProps = {};

export default React.memo(GroupDetailsView);
