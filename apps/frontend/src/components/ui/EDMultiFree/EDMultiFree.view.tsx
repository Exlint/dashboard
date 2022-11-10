import React from 'react';

import classes from './EDMultiFree.module.scss';

interface IProps {
	readonly title: string | null;
	readonly description: string | null;
}

const EDMultiFreeView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<div className={classes['title']}>{props.title}</div>
			<div className={classes['description']}>{props.description}</div>
		</div>
	);
};

EDMultiFreeView.displayName = 'EDMultiFreeView';
EDMultiFreeView.defaultProps = {};

export default React.memo(EDMultiFreeView);
