import React from 'react';
import Link from 'next/link';
import { Trans, useTranslation } from 'react-i18next';

import ELPSvg from '@/ui/ELPSvg';
import Header from '@/layout/Header';
import Cmd from './Cmd';
import FallingStars from './FallingStars';

import classes from './Intro.module.scss';

interface IProps {
	readonly isCommandCopied: boolean;
	readonly isCommandOnHover: boolean;
	readonly viewWidth: number | null;
	readonly onCopyCommand: VoidFunction;
	readonly onHoverCommand: (isHover: boolean) => void;
	readonly onGetStartedClick: VoidFunction;
}

const IntroView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<section className={classes['intro']}>
			<Header />
			<div className={classes['innerIntro']}>
				<FallingStars />
				<div className={classes['textContainer']}>
					<h1 className={classes['textContainer__mainHeader']}>{t('main.intro.mainTitle')}</h1>
					<h1 className={classes['textContainer__mainHeader--mobile']}>
						<Trans i18nKey="main.intro.mainTitleMobile" />
					</h1>
					<h2 className={classes['textContainer__subHeader']}>{t('main.intro.subTitle')}</h2>
					<h2 className={classes['textContainer__subHeader--mobile']}>
						<Trans i18nKey="main.intro.subTitleMobile" />
					</h2>
					<div className={classes['commandBox']}>
						{props.isCommandOnHover && (
							<span className={classes['commandBox__hoverText']}>
								{t('main.intro.command.hover')}
							</span>
						)}
						{props.isCommandCopied && (
							<span className={classes['commandBox__clickedText']}>
								{t('main.intro.command.clicked')}
							</span>
						)}
						<button
							className={classes['commandButton']}
							type="button"
							disabled={props.isCommandCopied}
							onClick={
								props.viewWidth && props.viewWidth > 700 ? props.onCopyCommand : undefined
							}
							onMouseEnter={() => props.onHoverCommand(true)}
							onMouseLeave={() => props.onHoverCommand(false)}
						>
							<span className={classes['commandButton__text']}>
								{t('main.intro.command.text')}
							</span>
							{props.isCommandCopied ? (
								<ELPSvg className={classes['commandButton__copiedIcon']} name="vConfirm" />
							) : (
								<ELPSvg className={classes['commandButton__copyIcon']} name="copyText" />
							)}
						</button>
					</div>
					<div className={classes['quickStartContainer']}>
						<Link
							className={classes['quickStartContainer__button']}
							href="https://docs.exlint.io"
							target="_self"
							data-testid="intro-quick-start-link"
							onClick={props.onGetStartedClick}
						>
							<span className={classes['quickStartContainer__button--text']}>
								{t('main.intro.quickStart')}
							</span>
						</Link>
						<span className={classes['quickStartContainer__text']}>
							{t('main.intro.description')}
						</span>
					</div>

					<Cmd />
				</div>
			</div>
		</section>
	);
};

IntroView.displayName = 'IntroView';
IntroView.defaultProps = {};

export default React.memo(IntroView);
