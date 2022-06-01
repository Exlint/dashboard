import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import VSvg from '@/ui/VSvg';
import { concatClasses } from '../../../utils/component';

// import { Trans, useTranslation } from 'react-i18next';

// import GroupCenter from './../../containers/GroupCenter';

import classes from './Header.module.scss';

interface IProps {}

const HeaderView: React.FC<IProps> = () => {
	// const { t } = useTranslation();
	const route = useLocation();

	let currentPage;

	if (route.pathname.includes('/groupCenter')) {
		currentPage = 'groupCenter';
	} else if (route.pathname.includes('/tokenManagement')) {
		currentPage = 'tokenManagement';
	} else if (route.pathname.includes('/userSettings')) {
		currentPage = 'userSettings';
	}

	return (
		<header className={classes['header']}>
			<div className={classes['innerHeader']}>
				<div className={classes['leftsideContainer']}>
					<VSvg name="brandWhiteLogo" className={classes['leftsideContainer__brandLogo']} />
					<div className={classes['navigationContainer']}>
						<Link
							to="/groupCenter"
							className={classes['linkContainer']}
							style={{
								borderBottom:
									currentPage === 'groupCenter'
										? '3px solid #E7E7E7'
										: '3px solid transparent',
							}}
						>
							<VSvg
								className={concatClasses(
									classes,
									'linkContainer__icon',
									'linkContainer__icon--groupCenter',
								)}
								name="groupCenter"
							/>
							<span className={classes['linkContainer__text']}>Group center</span>
						</Link>
						<Link
							to="/tokenManagement"
							className={classes['linkContainer']}
							style={{
								borderBottom:
									currentPage === 'tokenManagement'
										? '3px solid #E7E7E7'
										: '3px solid transparent',
							}}
						>
							<VSvg
								className={concatClasses(
									classes,
									'linkContainer__icon',
									'linkContainer__icon--tokenManagement',
								)}
								name="tokenManagement"
							/>
							<span className={classes['linkContainer__text']}> Token Management</span>
						</Link>
						<Link
							to="/userSettings"
							className={classes['linkContainer']}
							style={{
								borderBottom:
									currentPage === 'userSettings'
										? '3px solid #E7E7E7'
										: '3px solid transparent',
							}}
						>
							<span
								className={concatClasses(
									classes,
									'linkContainer__icon',
									'linkContainer__icon--userSettings',
								)}
							/>

							<span className={classes['linkContainer__text']}> User Settings</span>
						</Link>
					</div>
				</div>
				<div className={classes['rightSideContainer']}>
					<Link to="/groupCenter" className={classes['linkContainer']}>
						<span className={classes['linkContainer__text']}>Documentation</span>
						<VSvg className={classes['linkContainer__icon']} name="exitDoorIcon" />
					</Link>
				</div>
			</div>
		</header>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
