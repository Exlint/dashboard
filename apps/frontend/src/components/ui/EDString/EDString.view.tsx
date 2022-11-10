import React from 'react';

import classes from './EDString.module.scss';

interface IProps {
	readonly title: string | null;
	readonly description: string | null;
}

const EDStringView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<div className={classes['container__title']}>{props.title}</div>
			<div className={classes['container__description']}>{props.description}</div>
			<input className={classes['inputBox']} />
		</section>
	);
};

EDStringView.displayName = 'EDStringView';
EDStringView.defaultProps = {};

export default React.memo(EDStringView);
