import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import ELPSvg from '@/ui/ELPSvg';

import classes from './Footer.module.scss';

interface IProps {
	readonly onViewPort: (_: boolean) => void;
	readonly onGithubClickTrack: VoidFunction;
	readonly onLoginClickTrack: VoidFunction;
	readonly onDocsClickTrack: VoidFunction;
	readonly onGetStartedClickTrack: VoidFunction;
	readonly onHomeClicked: VoidFunction;
	readonly onTermsOfUseClickTrack: VoidFunction;
	readonly onPrivacyClickTrack: VoidFunction;
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
							<Link
								className={classes['linkItem']}
								href="https://github.com/Exlint/cli"
								target="_blank"
								data-testid="footer-github-link"
								onClick={props.onGithubClickTrack}
							>
								<ELPSvg className={classes['linkItem__githubIcon']} name="githubIcon" />
							</Link>
						</div>
					</div>
					<Link
						className={classes['firstLineContainer__getStarted']}
						href="https://docs.exlint.io"
						target="_self"
						data-testid="footer-get-started-link"
						onClick={props.onGetStartedClickTrack}
					>
						{t('layout.footer.getStarted')}
					</Link>

					<div className={classes['leftLinksContainer']}>
						<Link
							className={classes['leftLinksContainer__link']}
							href="https://docs.exlint.io"
							target="_self"
							data-testid="footer-documentations-link"
							onClick={props.onDocsClickTrack}
						>
							{t('layout.footer.docs')}
						</Link>
						<Link
							className={classes['leftLinksContainer__link']}
							href="https://app.exlint.io"
							target="_blank"
							data-testid="footer-login-link"
							onClick={props.onLoginClickTrack}
						>
							{t('layout.footer.login')}
						</Link>
					</div>
				</div>
				<div className={classes['secondLineContainer']}>
					<span className={classes['secondLineContainer__link']}>{t('layout.footer.exlint')}</span>
					<Link
						className={classes['secondLineContainer__link']}
						href="https://github.com/Exlint/usage-policies/blob/main/terms-of-service.mdx"
						target="_blank"
						data-testid="footer-terms-of-use-link"
						onClick={props.onTermsOfUseClickTrack}
					>
						{t('layout.footer.termOfUse')}
					</Link>
					<Link
						className={classes['secondLineContainer__link']}
						href="https://github.com/Exlint/usage-policies/blob/main/privacy-policy.mdx"
						target="_blank"
						data-testid="footer-privacy-link"
						onClick={props.onPrivacyClickTrack}
					>
						{t('layout.footer.privacy')}
					</Link>
				</div>
			</div>
		</footer>
	);
};

FooterView.displayName = 'FooterView';
FooterView.defaultProps = {};

export default React.memo(FooterView);
