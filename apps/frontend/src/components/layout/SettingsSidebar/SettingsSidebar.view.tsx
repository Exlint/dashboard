import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';

import classes from './SettingsSidebar.module.scss';

interface IProps {
	readonly name: string;
}

const SettingsSidebarView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<aside className={classes['container']}>
			<section className={classes['headerWrapper']}>
				<EDSvg className={classes['headerWrapper__icon']} name="backToGroupLabel" />
				<div className={classes['headerWrapper__title']}>
					{t('policySidebar.header.title')}
					&nbsp;
					<span className={classes['headerWrapper__title--purple']}>
						&lsquo;
						{t('policySidebar.header.purpleTitle')}
						&rsquo;
					</span>
				</div>
			</section>
			<hr className={classes['divider']} />

			<section className={classes['body']}>
				<div className={classes['policyLabelWrapper']}>
					<span className={classes['policyLabelWrapper__text']}>
						{t('policySidebar.body.title')}
					</span>
					<EDSvg className={classes['policyLabelWrapper__icon']} name="threeDots" />
				</div>
				<span className={classes['createdAt']}>Created in: 24 May 2022</span>
				<div className={classes['policyDetailsWrpper']}>s </div>
			</section>
		</aside>
	);
};

SettingsSidebarView.displayName = 'SettingsSidebarView';
SettingsSidebarView.defaultProps = {};

export default React.memo(SettingsSidebarView);
