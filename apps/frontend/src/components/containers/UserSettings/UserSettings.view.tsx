import React from 'react';

import classes from './TokenManagement.module.scss';

interface IProps {}

const UserSettingsView: React.FC<IProps> = () => {
	return (
		<section className={classes['userSettings']}>
			<h1>user settings</h1>
		</section>
	);
};

UserSettingsView.displayName = 'UserSettingsView';
UserSettingsView.defaultProps = {};

export default React.memo(UserSettingsView);
