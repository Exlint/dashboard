import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import EDSvg from '@/ui/EDSvg';

import { concatClasses } from '../../../../utils/component';
import classes from './LeftSide.module.scss';

interface IProps {}

const LeftSideView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	const route = useLocation();

	let currentPage;

	if (route.pathname.includes('/group-center')) {
		currentPage = 'groupCenter';
	} else if (route.pathname.includes('/token-management')) {
		currentPage = 'tokenManagement';
	} else if (route.pathname.includes('/user-settings')) {
		currentPage = 'userSettings';
	}

	return (
		<div className={classes['leftsideContainer']}>
			<EDSvg name="brandWhiteLogo" className={classes['leftsideContainer__brandLogo']} />
			<nav className={classes['navigationContainer']}>
				<Link
					to="/group-center"
					className={classes['linkContainer']}
					style={{
						borderBottom:
							currentPage === 'groupCenter' ? '3px solid #E7E7E7' : '3px solid transparent',
					}}
				>
					<EDSvg
						className={concatClasses(
							classes,
							'linkContainer__icon',
							'linkContainer__icon--groupCenter',
						)}
						name="groupCenter"
					/>
					<span className={classes['linkContainer__text']}>{t('header.leftSide.groupCenter')}</span>
				</Link>
				<Link
					to="/token-management"
					className={classes['linkContainer']}
					style={{
						borderBottom:
							currentPage === 'tokenManagement' ? '3px solid #E7E7E7' : '3px solid transparent',
					}}
				>
					<EDSvg
						className={concatClasses(
							classes,
							'linkContainer__icon',
							'linkContainer__icon--tokenManagement',
						)}
						name="tokenManagement"
					/>
					<span className={classes['linkContainer__text']}>
						{t('header.leftSide.tokenManagement')}
					</span>
				</Link>
				<Link
					to="/user-settings"
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

					<span className={classes['linkContainer__text']}>
						{t('header.leftSide.userSettings')}
					</span>
				</Link>
			</nav>
		</div>
	);
};

LeftSideView.displayName = 'LeftSideView';
LeftSideView.defaultProps = {};

export default React.memo(LeftSideView);
