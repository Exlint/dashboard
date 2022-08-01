import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import eslintLogo from '@/images/libraries/eslint.png';

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
				<span className={classes['body__createdAt']}>
					{t('policySidebar.body.createdAt')}
					&nbsp;24 May 2022
				</span>
				<div className={classes['policyDetailsWrpper']}>
					<div className={classes['policyDetailsInnerWrpper']}>
						<span className={classes['policyDetailsInnerWrpper__title']}>
							{t('policySidebar.body.details.library')}
						</span>
						<div className={classes['libraryContentWrapper']}>
							<img
								src={eslintLogo}
								alt="Eslint"
								className={classes['libraryContentWrapper__img']}
							/>
							<span className={classes['libraryContentWrapper__content']}>Eslint</span>
						</div>
					</div>
					<div className={classes['policyDetailsInnerWrpper']}>
						<span className={classes['policyDetailsInnerWrpper__title']}>
							{t('policySidebar.body.details.type')}
						</span>
						<span className={classes['policyDetailsInnerWrpper__content']}>Linter</span>
					</div>
					<div className={classes['policyDetailsInnerWrpper']}>
						<span className={classes['policyDetailsInnerWrpper__title']}>
							{t('policySidebar.body.details.category')}
						</span>
						<span className={classes['policyDetailsInnerWrpper__content']}>Lorem</span>
					</div>
					<div className={classes['policyDetailsInnerWrpper']}>
						<span className={classes['policyDetailsInnerWrpper__title']}>
							{t('policySidebar.body.details.rules')}
						</span>
						<span className={classes['policyDetailsInnerWrpper__content']}>Manual</span>
					</div>
				</div>
			</section>
		</aside>
	);
};

SettingsSidebarView.displayName = 'SettingsSidebarView';
SettingsSidebarView.defaultProps = {};

export default React.memo(SettingsSidebarView);
