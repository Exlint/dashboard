import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import createPolicyLeftImg from '@/images/create-policy-left.png';
import createPolicyRightImg from '@/images/create-policy-right.png';
import EDSvg from '@/ui/EDSvg';

import classes from './TablePlaceholder.module.scss';

interface IProps {}

const TablePlaceholderView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<h3 className={classes['container__header']}>
				{t('groupCenter.policies.table.placeholderHeader')}
			</h3>

			<div className={classes['illustrationsContainer']}>
				<div className={classes['contentContainer']}>
					<img
						className={classes['contentContainer__leftImg']}
						src={createPolicyLeftImg}
						alt={t('groupCenter.policies.table.createPolicyLeft')}
					/>
					<span className={classes['contentContainer__text']}>
						{t('groupCenter.policies.table.createPolicyLeft')}
					</span>
				</div>

				<EDSvg className={classes['illustrationsContainer__icon']} name="longArrowRight" />

				<div className={classes['contentContainer']}>
					<img
						className={classes['contentContainer__rightImg']}
						src={createPolicyRightImg}
						alt={t('groupCenter.policies.table.createPolicyRight')}
					/>
					<span className={classes['contentContainer__text']}>
						<Trans i18nKey="groupCenter.policies.table.createPolicyRight" />
					</span>
				</div>
			</div>
		</div>
	);
};

TablePlaceholderView.displayName = 'TablePlaceholderView';
TablePlaceholderView.defaultProps = {};

export default React.memo(TablePlaceholderView);
