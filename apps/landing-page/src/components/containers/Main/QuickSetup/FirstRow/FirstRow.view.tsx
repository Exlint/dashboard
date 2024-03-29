import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import classes from './FirstRow.module.scss';

interface IProps {}

const FirstRowView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<div className={classes['leftSide']}>
				<iframe
					className={classes['leftSide__video']}
					src="https://demo.arcade.software/5tAOKDlVOa3tFEImzn8h?embed"
					allowFullScreen
					title="Exlint Demo"
				/>
			</div>
			<div className={classes['rightSide']}>
				<h3 className={classes['rightSide__title']}>{t('main.quickSetup.firstRow.title')}</h3>
				<span className={classes['rightSide__description']}>
					<Trans i18nKey="main.quickSetup.firstRow.description" />
				</span>
				<span className={classes['rightSide__description--mobile']}>
					<Trans i18nKey="main.quickSetup.firstRow.descriptionMobile" />
				</span>
				<div className={classes['innerDots']}>
					<div className={classes['lineContainer']}>
						<span className={classes['lineContainer__dot']} />
						<span className={classes['lineContainer__text']}>
							{t('main.quickSetup.firstRow.setup')}
						</span>
					</div>
					<div className={classes['lineContainer']}>
						<span className={classes['lineContainer__dot']} />
						<span className={classes['lineContainer__text']}>
							{t('main.quickSetup.firstRow.iteration')}
						</span>
					</div>
					<div className={classes['lineContainer']}>
						<span className={classes['lineContainer__dot']} />
						<span className={classes['lineContainer__text']}>
							{t('main.quickSetup.firstRow.appliance')}
						</span>
					</div>
					<div className={classes['lineContainer']}>
						<span className={classes['lineContainer__dot']} />
						<span className={classes['lineContainer__text']}>
							{t('main.quickSetup.firstRow.privacy')}
						</span>
					</div>
					<div className={classes['lineContainer']}>
						<span className={classes['lineContainer__dot']} />
						<span className={classes['lineContainer__text']}>
							{t('main.quickSetup.firstRow.comingSoon')}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

FirstRowView.displayName = 'FirstRowView';
FirstRowView.defaultProps = {};

export default React.memo(FirstRowView);
