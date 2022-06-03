import React from 'react';

import classes from './Header.module.scss';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

interface IProps {
	readonly onExitButton: () => void;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<header className={classes['header']}>
			<div className={classes['innerHeader']}>
				<LeftSide />
				<RightSide onExitButton={props.onExitButton} />
			</div>
		</header>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
