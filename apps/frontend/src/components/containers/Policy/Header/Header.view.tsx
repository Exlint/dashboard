import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import EDSvg from '@/ui/EDSvg';
import { concatClasses } from '@/utils/component';
import type { ILibraryName } from '@/interfaces/libraries';
import logosObject from '@/utils/libraries-logos';

import classes from './Header.module.scss';

interface IProps {
	readonly groupLabel: string | null;
	readonly policyLabel: string | null;
	readonly library: ILibraryName | null;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<header className={classes['container']}>
			<div className={classes['topHeader']}>
				<div className={classes['labelsContainer']}>
					<EDSvg className={classes['labelsContainer__icon']} name="group" />
					<span className={classes['labelsContainer__label']}>{props.groupLabel}</span>

					<span className={classes['labelsContainer__divider']}>&#47;</span>

					<EDSvg className={classes['labelsContainer__icon']} name="policy" />
					<span
						className={concatClasses(
							classes,
							'labelsContainer__label',
							'labelsContainer__label--policy',
						)}
					>
						{props.policyLabel}
					</span>
				</div>

				<div className={classes['libraryContainer']}>
					<span className={classes['libraryContainer__prefix']}>
						{t('policy.header.libraryPrefix')}
						<Trans>&#58;</Trans>
					</span>

					{props.library && (
						<div className={classes['libraryValue']}>
							<img
								className={classes['libraryValue__img']}
								src={logosObject[props.library.toLowerCase() as keyof typeof logosObject]}
								alt={props.library}
							/>
							<span className={classes['libraryValue__text']}>{props.library}</span>
						</div>
					)}
				</div>
			</div>

			<div className={classes['tabs']}>
				<NavLink
					className={({ isActive }) =>
						concatClasses(classes, 'tab', isActive ? 'tab--active' : null)
					}
					to="rules"
				>
					<EDSvg className={classes['tab__icon']} name="rule" />
					<span className={classes['tab__text']}>{t('policy.header.tabs.rules')}</span>
					<div className={classes['tab__border']} />
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						concatClasses(classes, 'tab', isActive ? 'tab--active' : null)
					}
					to="configurations"
				>
					<EDSvg className={classes['tab__icon']} name="configurations" />
					<span className={classes['tab__text']}>{t('policy.header.tabs.configurations')}</span>
					<div className={classes['tab__border']} />
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						concatClasses(classes, 'tab', isActive ? 'tab--active' : null)
					}
					to="history"
				>
					<EDSvg className={classes['tab__icon']} name="history" />
					<span className={classes['tab__text']}>{t('policy.header.tabs.history')}</span>
					<div className={classes['tab__border']} />
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						concatClasses(classes, 'tab', isActive ? 'tab--active' : null)
					}
					to="settings"
				>
					<EDSvg className={classes['tab__icon']} name="settings" />
					<span className={classes['tab__text']}>{t('policy.header.tabs.settings')}</span>
					<div className={classes['tab__border']} />
				</NavLink>
			</div>
		</header>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
