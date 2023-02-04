import React from 'react';

import classes from './Main.module.scss';

interface IProps {}

const MainView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <main className={classes['main']}>{props.children}</main>;
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
