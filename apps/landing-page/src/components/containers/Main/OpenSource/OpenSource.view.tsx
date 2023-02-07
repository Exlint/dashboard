import React from 'react';
import Link from 'next/link';
import { Trans, useTranslation } from 'react-i18next';

import ELPSvg from '@/ui/ELPSvg';

import classes from './OpenSource.module.scss';

interface IProps {
	readonly onGetStartedClickTrack: VoidFunction;
}

const OpenSourceView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<section className={classes['container']}>
			<ELPSvg className={classes['background']} name="openSourceBackground" />
			<ELPSvg className={classes['backgroundMobile']} name="openSourceMobileBackground" />
			<div className={classes['innerTitle']}>
				<h2 className={classes['innerTitle__top']}>{t('main.openSource.mainTitle')}</h2>
				<h2 className={classes['innerTitle__top--mobile']}>
					<Trans i18nKey="main.openSource.mainTitleMobile" />
				</h2>
				<h2 className={classes['innerTitle__bottom']}>{t('main.openSource.subTitle')}</h2>
				<h2 className={classes['innerTitle__bottom--mobile']}>
					<Trans i18nKey="main.openSource.subTitleMobile" />
				</h2>
			</div>
			<div className={classes['boxContainer']}>
				<div className={classes['leftSide']}>
					<div className={classes['top']}>
						<h3 className={classes['top__title']}>{t('main.openSource.openSource')}</h3>
						<div className={classes['freeBox']}>
							<span className={classes['freeBox__text']}>{t('main.openSource.free')}</span>
						</div>
					</div>
					<span className={classes['middleText']}>
						<Trans i18nKey="main.openSource.description" />
					</span>
					<Link
						className={classes['viewDocsButton']}
						href="https://docs.exlint.io"
						target="_self"
						data-testid="open-source-documentations-link"
						onClick={props.onGetStartedClickTrack}
					>
						{t('main.openSource.viewDocs')}
					</Link>
				</div>
				<div className={classes['rightSide']}>
					<div className={classes['incloudsBox']}>
						<ELPSvg className={classes['incloudsBox__icon']} name="vConfirm" />
						<span className={classes['incloudsBox__text']}>
							<Trans i18nKey="main.openSource.inclouds" />
						</span>
					</div>
					<div className={classes['incloudsBox']}>
						<ELPSvg className={classes['incloudsBox__icon']} name="vConfirm" />
						<span className={classes['incloudsBox__text']}>{t('main.openSource.cli')}</span>
					</div>
					<div className={classes['incloudsBox']}>
						<ELPSvg className={classes['incloudsBox__icon']} name="vConfirm" />
						<span className={classes['incloudsBox__text']}>{t('main.openSource.github')}</span>
					</div>
					<Link
						className={classes['viewDocsButtonMobile']}
						href="https://docs.exlint.io"
						target="_self"
						onClick={props.onGetStartedClickTrack}
					>
						{t('main.openSource.viewDocs')}
					</Link>
				</div>
			</div>
		</section>
	);
};

OpenSourceView.displayName = 'OpenSourceView';
OpenSourceView.defaultProps = {};

export default React.memo(OpenSourceView);
