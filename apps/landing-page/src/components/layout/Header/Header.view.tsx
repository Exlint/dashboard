import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import ELPSvg from '@/ui/ELPSvg';

import classes from './Header.module.scss';

interface IProps {
	readonly isLogoOnHover: boolean;
	readonly onHoverLogo: (_: boolean) => void;
	readonly onDocsClickTrack: VoidFunction;
	readonly onGithubClickTrack: VoidFunction;
	readonly onLogInClickTrack: VoidFunction;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<header className={classes['header']}>
			<div className={classes['innerHeader']}>
				<div
					className={classes['leftSideContainer']}
					onMouseEnter={() => props.onHoverLogo(true)}
					onMouseLeave={() => props.onHoverLogo(false)}
				>
					<Link href="/" passHref>
						<ELPSvg className={classes['brandLogo']} name="brandLogoWhite" />
					</Link>
					{props.isLogoOnHover && <span className={classes['leftSideContainer__bouncingDot']} />}
				</div>
				<div className={classes['middleSideContainer']}>
					<Link
						className={classes['headerMenuItem']}
						href="https://docs.exlint.io"
						target="_self"
						data-testid="header-first-documentations-link"
						onClick={props.onDocsClickTrack}
					>
						<span className={classes['headerMenuItem__text']}>{t('layout.header.docs')}</span>
					</Link>
					<Link
						className={classes['headerMenuItem']}
						href="https://github.com/Exlint/cli"
						target="_blank"
						data-testid="header-github-link"
						onClick={props.onGithubClickTrack}
					>
						<ELPSvg className={classes['headerMenuItem__githubIcon']} name="githubIcon" />
						<span className={classes['headerMenuItem__text']}>{t('layout.header.github')}</span>
					</Link>
				</div>
				<div className={classes['rightSideContainer']}>
					<Link
						className={classes['loginButton']}
						href="https://app.exlint.io"
						target="_blank"
						data-testid="header-login-link"
						onClick={props.onLogInClickTrack}
					>
						{t('layout.header.login')}
					</Link>
					<Link
						className={classes['getStartedButton']}
						href="https://docs.exlint.io"
						target="_self"
						data-testid="header-second-documentations-link"
						onClick={props.onDocsClickTrack}
					>
						<span className={classes['getStartedButton__text']}>
							{t('layout.header.getStarted')}
						</span>
					</Link>
				</div>
			</div>
		</header>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
