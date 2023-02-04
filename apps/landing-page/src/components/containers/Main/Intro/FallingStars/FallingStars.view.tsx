import React from 'react';

import classes from './FallingStars.module.scss';

interface IProps {}

const FallingStarsView: React.FC<IProps> = () => {
	return (
		<div className={classes['starsContainer']}>
			<span className={classes['starsContainer__star']} />
			<span className={classes['starsContainer__star']} />
			<span className={classes['starsContainer__star']} />
			<span className={classes['starsContainer__star']} />
			<span className={classes['starsContainer__star']} />
			<span className={classes['starsContainer__star']} />
		</div>
	);
};

FallingStarsView.displayName = 'FallingStarsView';
FallingStarsView.defaultProps = {};

export default React.memo(FallingStarsView);
