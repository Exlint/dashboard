import React from 'react';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';
import { concatClasses } from '@/utils/component';

import ELPSvg from '@/ui/ELPSvg';
import exlintLogo from '@/images/exlint-white-logo.png';

import classes from './EmpowerEfficient.module.scss';

interface IProps {
	readonly isCommandCopied: boolean;
	readonly isCommandOnHover: boolean;
	readonly onCopyCommand: () => void;
	readonly onHoverCommand: (_: boolean) => void;
	readonly onDocsNavigate: () => void;
	readonly onGithubNavigate: () => void;
}

const EmpowerEfficientView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<section className={classes['container']}>
			<div className={classes['innerBox']}>
				<div className={classes['top']}>
					<div className={classes['leftSide']}>
						<h3 className={classes['leftSide__title']}>
							<Trans i18nKey="main.empowerEfficient.title" />
						</h3>
						<span className={classes['leftSide__description']}>
							{t('main.empowerEfficient.description')}
						</span>
						<div className={classes['innerDocs']}>
							<div className={classes['brandsContainer']}>
								<button
									className={classes['element']}
									type="button"
									onClick={props.onGithubNavigate}
								>
									<ELPSvg className={classes['githubIcon']} name="githubIcon" />
									<span className={classes['element__text']}>
										{t('main.empowerEfficient.github')}
									</span>
								</button>
								<button
									className={classes['element']}
									type="button"
									onClick={props.onDocsNavigate}
								>
									<ELPSvg className={classes['docsIcon']} name="docs" />
									<span className={classes['element__text']}>Docs</span>
								</button>
								{/* <div className={classes['element']}>
									<ELPSvg className={classes['discordIcon']} name="discordWhiteLogo" />
									<span className={classes['element__text']}>
										{t('main.empowerEfficient.discord')}
									</span>
								</div> */}
							</div>

							<hr className={classes['innerDocs__divider']} />
						</div>
					</div>
					<Image
						className={classes['top__img']}
						src={exlintLogo}
						alt="Exlint logo"
						placeholder="blur"
					/>
				</div>
				<div className={classes['bottom']}>
					<h3 className={classes['bottom__title']}>{t('main.empowerEfficient.getStarted')}</h3>
					<div className={classes['commandBox']}>
						{props.isCommandOnHover && (
							<span className={classes['commandBox__hoverText']}>
								{t('main.empowerEfficient.command.hover')}
							</span>
						)}
						{props.isCommandCopied && (
							<span className={classes['commandBox__clickedText']}>
								{t('main.empowerEfficient.command.clicked')}
							</span>
						)}
						<button
							className={classes['commandButton']}
							type="button"
							disabled={props.isCommandCopied}
							onClick={props.onCopyCommand}
							onMouseEnter={() => props.onHoverCommand(true)}
							onMouseLeave={() => props.onHoverCommand(false)}
						>
							<span className={classes['commandButton__text']}>
								{t('main.empowerEfficient.command.text')}
							</span>
							{props.isCommandCopied ? (
								<ELPSvg className={classes['commandButton__copiedIcon']} name="vConfirm" />
							) : (
								<ELPSvg className={classes['commandButton__copyIcon']} name="copyText" />
							)}
						</button>
					</div>
					<div className={classes['docs']}>
						<button type="button" onClick={props.onDocsNavigate}>
							<span className={concatClasses(classes, 'docs__text', 'docs__text--underline')}>
								{t('main.empowerEfficient.docs.docs')}
							</span>
							<span className={classes['docs__text']}>
								{t('main.empowerEfficient.docs.arrow')}
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

EmpowerEfficientView.displayName = 'EmpowerEfficientView';
EmpowerEfficientView.defaultProps = {};

export default React.memo(EmpowerEfficientView);
