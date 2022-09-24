import React from 'react';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

import classes from './Auth.module.scss';

interface IProps {}

const AuthView: React.FC<IProps> = () => {
	return (
		<main className={classes['main']}>
			<LeftSide />
			<RightSide />
		</main>
	);
};

AuthView.displayName = 'AuthView';
AuthView.defaultProps = {};

export default React.memo(AuthView);
