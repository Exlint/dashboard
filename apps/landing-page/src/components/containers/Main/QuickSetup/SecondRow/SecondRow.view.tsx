import React from 'react';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';

import policiesDashboard from '@/images/policies-dash.png';

import classes from './SecondRow.module.scss';

interface IProps {}

const SecondRowView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<div className={classes['leftSide']}>
				<h3 className={classes['leftSide__title']}>{t('main.quickSetup.secondRow.title')}</h3>
				<span className={classes['leftSide__description']}>
					<Trans i18nKey="main.quickSetup.secondRow.description" />
				</span>
				<div className={classes['innerDots']}>
					<div className={classes['lineContainer']}>
						<span className={classes['lineContainer__dot']} />
						<span className={classes['lineContainer__text']}>
							{t('main.quickSetup.secondRow.ruleCreation')}
						</span>
					</div>
					<div className={classes['lineContainer']}>
						<span className={classes['lineContainer__dot']} />
						<span className={classes['lineContainer__text']}>
							{t('main.quickSetup.secondRow.integrate')}
						</span>
					</div>
					<div className={classes['lineContainer']}>
						<span className={classes['lineContainer__dot']} />
						<span className={classes['lineContainer__text']}>
							{t('main.quickSetup.secondRow.updating')}
						</span>
					</div>
					<div className={classes['lineContainer']}>
						<span className={classes['lineContainer__dot']} />
						<span className={classes['lineContainer__text']}>
							{t('main.quickSetup.secondRow.cli')}
						</span>
					</div>
					<div className={classes['lineContainer']}>
						<span className={classes['lineContainer__dot']} />
						<span className={classes['lineContainer__text']}>
							{t('main.quickSetup.secondRow.ci')}
						</span>
					</div>
				</div>
			</div>
			<div className={classes['rightSide']}>
				<div className={classes['commandBox']}>
					<span className={classes['commandBox__text']}>
						{t('main.quickSetup.secondRow.command.text')}
					</span>
					&nbsp; &nbsp;
					<span className={classes['commandBox__chevron']}>
						{t('main.quickSetup.secondRow.command.groupId.leftChevron')}
					</span>
					<span className={classes['commandBox__text']}>
						{t('main.quickSetup.secondRow.command.groupId.text')}
					</span>
					<span className={classes['commandBox__chevron']}>
						{t('main.quickSetup.secondRow.command.groupId.rightChevron')}
					</span>
				</div>
				<Image
					className={classes['rightSide__img']}
					src={policiesDashboard}
					alt="policies dashboard"
					placeholder="blur"
				/>
			</div>
		</div>
	);
};

SecondRowView.displayName = 'SecondRowView';
SecondRowView.defaultProps = {};

export default React.memo(SecondRowView);
