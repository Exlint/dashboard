import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import ELPSvg from '@/ui/ELPSvg';

import classes from './Footer.module.scss';

interface IProps {
	readonly onViewPort: (_: boolean) => void;
	readonly onGithubNavigate: () => void;
	readonly onLoginNavigate: () => void;
	readonly onDocsNavigate: () => void;
	readonly onGetStartedNavigate: () => void;
	readonly onHomeClicked: () => void;
	readonly onTermsOfUseNavigate: () => void;
	readonly onPrivacyNavigate: () => void;
}

const FooterView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const { ref, inView } = useInView();

	props.onViewPort(inView);

	return (
		<footer className={classes['footer']} ref={ref}>
			<div className={classes['innerFooter']}>
				<div className={classes['firstLineContainer']}>
					<div className={classes['mobileLogoContainer']}>
						<Link href="/" passHref>
							<ELPSvg className={classes['brandLogo']} name="brandLogoWhite" />
						</Link>
						<div className={classes['linksContainer']}>
							<button
								className={classes['linkItem']}
								type="button"
								onClick={props.onGithubNavigate}
							>
								<ELPSvg className={classes['linkItem__githubIcon']} name="githubIcon" />
							</button>
							{/* <button
								className={classes['linkItem']}
								type="button"
								onClick={props.onDiscordNavigate}
							>
								<ELPSvg
									className={classes['linkItem__discordIcon']}
									name="discordWhiteLogo"
								/>
							</button> */}
						</div>
					</div>

					<button
						className={classes['firstLineContainer__getStarted']}
						type="button"
						onClick={props.onGetStartedNavigate}
					>
						{t('layout.footer.getStarted')}
					</button>

					<div className={classes['leftLinksContainer']}>
						<button
							className={classes['leftLinksContainer__link']}
							type="button"
							onClick={props.onDocsNavigate}
						>
							{t('layout.footer.docs')}
						</button>
						<button
							className={classes['leftLinksContainer__link']}
							type="button"
							onClick={props.onLoginNavigate}
						>
							{t('layout.footer.login')}
						</button>
					</div>
					{/* <div className={classes['rightLinksContainer']}>
							<button className={classes['rightLinksContainer__link']} type="button">
								{t('layout.footer.pricing')}
							</button>
							<button className={classes['rightLinksContainer__link']} type="button">
								{t('layout.footer.login')}
							</button>
						</div> */}
				</div>
				<div className={classes['secondLineContainer']}>
					<span className={classes['secondLineContainer__link']}>{t('layout.footer.exlint')}</span>
					<button
						className={classes['secondLineContainer__link']}
						type="button"
						onClick={props.onTermsOfUseNavigate}
					>
						{t('layout.footer.termOfUse')}
					</button>
					<button
						className={classes['secondLineContainer__link']}
						type="button"
						onClick={props.onPrivacyNavigate}
					>
						{t('layout.footer.privicy')}
					</button>
				</div>
			</div>
		</footer>
	);
};

FooterView.displayName = 'FooterView';
FooterView.defaultProps = {};

export default React.memo(FooterView);
