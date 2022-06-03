import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

import { Link, useLocation } from 'react-router-dom';
import VSvg from '@/ui/VSvg';

import { concatClasses } from '../../../../utils/component';
import classes from './LeftSide.module.scss';

interface IProps {}

const LeftSideView: React.FC<IProps> = () => {
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
		<div className={classes['leftsideContainer']}>
			<VSvg name="brandWhiteLogo" className={classes['leftsideContainer__brandLogo']} />
			<div className={classes['navigationContainer']}>
				<Link
					to="/groupCenter"
					className={classes['linkContainer']}
					style={{
						borderBottom:
							currentPage === 'groupCenter' ? '3px solid #E7E7E7' : '3px solid transparent',
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
							currentPage === 'tokenManagement' ? '3px solid #E7E7E7' : '3px solid transparent',
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
							currentPage === 'userSettings' ? '3px solid #E7E7E7' : '3px solid transparent',
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
	);
};

LeftSideView.displayName = 'LeftSideView';
LeftSideView.defaultProps = {};

export default React.memo(LeftSideView);
