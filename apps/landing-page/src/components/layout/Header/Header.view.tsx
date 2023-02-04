import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import ELPSvg from '@/ui/ELPSvg';

import classes from './Header.module.scss';

interface IProps {
	readonly isLogoOnHover: boolean;
	readonly onHoverLogo: (_: boolean) => void;
	readonly onDocsNavigate: () => void;
	readonly onGithubNavigate: () => void;
	readonly onDiscordNavigate: () => void;
	readonly onGetStartedNavigate: () => void;
	readonly onLogInNavigate: () => void;
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
					<button
						className={classes['headerMenuItem']}
						type="button"
						onClick={props.onDocsNavigate}
					>
						<span className={classes['headerMenuItem__text']}>{t('layout.header.docs')}</span>
					</button>
					<button
						className={classes['headerMenuItem']}
						type="button"
						onClick={props.onGithubNavigate}
					>
						<ELPSvg className={classes['headerMenuItem__githubIcon']} name="githubIcon" />
						<span className={classes['headerMenuItem__text']}>{t('layout.header.github')}</span>
					</button>
					{/* <button
						className={classes['headerMenuItem']}
						type="button"
						onClick={props.onDiscordNavigate}
					>
						<ELPSvg className={classes['headerMenuItem__discordIcon']} name="discordLogo" />
						<span className={classes['headerMenuItem__text']}>{t('layout.header.discord')}</span>
					</button> */}
				</div>
				<div className={classes['rightSideContainer']}>
					<button className={classes['loginButton']} type="button" onClick={props.onLogInNavigate}>
						{t('layout.header.login')}
					</button>
					<button
						className={classes['getStartedButton']}
						type="button"
						onClick={props.onDocsNavigate}
					>
						<span className={classes['getStartedButton__text']}>
							{t('layout.header.getStarted')}
						</span>
					</button>
				</div>
			</div>
		</header>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
