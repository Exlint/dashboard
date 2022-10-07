import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import EDSvg from '@/ui/EDSvg';
import { concatClasses } from '@/utils/component';
import type { ILibraryName } from '@/interfaces/libraries';
import logosObject from '@/utils/libraries-logos';

import classes from './Header.module.scss';
import Tabs from './Tabs';

interface IProps {
	readonly groupLabel: string | null;
	readonly policyLabel: string | null;
	readonly library: ILibraryName | null;
	readonly groupId: string;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<header className={classes['container']}>
			<div className={classes['topHeader']}>
				<div className={classes['labelsContainer']}>
					<Link className={classes['groupLink']} to={`/group-center/${props.groupId}`}>
						<EDSvg className={classes['labelsContainer__icon']} name="group" />
						<span className={classes['labelsContainer__label']}>{props.groupLabel}</span>
					</Link>

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

			<Tabs />
		</header>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
