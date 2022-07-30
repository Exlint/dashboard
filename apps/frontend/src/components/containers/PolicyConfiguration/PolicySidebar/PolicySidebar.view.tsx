import React from 'react';

import classes from './PolicySidebar.module.scss';

interface IProps {}

const PolicySidebarView: React.FC<IProps> = () => {
	return (
		<div className={classes['container']}>
			<section className={classes['sidebar']}>
				<span>temp sidebar</span>
			</section>
		</div>
	);
};

PolicySidebarView.displayName = 'PolicySidebarView';
PolicySidebarView.defaultProps = {};

export default React.memo(PolicySidebarView);
