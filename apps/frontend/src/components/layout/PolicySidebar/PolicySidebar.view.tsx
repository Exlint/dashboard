import React from 'react';
// Import { useTranslation } from 'react-i18next';

import classes from './PolicySidebar.module.scss';

interface IProps {
	readonly name: string;
}

const PolicySidebarView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// Const { t } = useTranslation();

	return (
		<aside className={classes['container']}>
			<div className={classes['sidebar']}>
				<div className={classes['headerContainer']}>
					<h2 className={classes['headerContainer__title']}>fnefne</h2>
				</div>
				<hr className={classes['divider']} />
				<div className={classes['userDetalis']}>
					<div className={classes['usernameContainer']}>
						{/* <EDSvg
							name="userSettingsSidebarDefultProfilePicture"
							className={classes['usernameContainer__profileIcon']}
						/> */}
						<span className={classes['usernameContainer__usernameText']}>jnvsdj</span>
					</div>
					<span className={classes['usernameContainer__username']}>{props.name}</span>
				</div>
			</div>
		</aside>
	);
};

PolicySidebarView.displayName = 'PolicySidebarView';
PolicySidebarView.defaultProps = {};

export default React.memo(PolicySidebarView);
