import React from 'react';

import classes from './EDBoolean.module.scss';

interface IProps {
	readonly title: string | null;
	readonly description: string | null;
}

const EDBooleanView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<div className={classes['title']}>{props.title}</div>
			<div className={classes['description']}>{props.description}</div>
		</div>
	);
};

EDBooleanView.displayName = 'EDBooleanView';
EDBooleanView.defaultProps = {};

export default React.memo(EDBooleanView);
