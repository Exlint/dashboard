import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { concatClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';

import classes from './BluePlaceholder.module.scss';

interface IProps {
	readonly show: boolean;
	readonly complianceId?: string;
	readonly policyId?: string;
}

const BluePlaceholderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={concatClasses(classes, 'container', props.show ? 'container--show' : null)}>
			<ul>
				<span className={classes['list__header']}>
					<Trans i18nKey="policy.rules.table.blurHeader" />
				</span>

				<li className={classes['list__text']}>
					<Trans>&#8226;</Trans>
					&nbsp;
					<Trans i18nKey="policy.rules.table.blurFirstTextPrefix" />
					&nbsp;
					<Link
						className={classes['list__link']}
						to={`/compliance-center/${props.complianceId}/policies/${props.policyId}/configurations/configuration/code`}
					>
						<strong>{t('policy.rules.table.blurFirstTextPostfix')}</strong>
					</Link>
					&nbsp;
					<b>&gt;</b>
				</li>
				<li className={classes['list__text']}>
					<Trans>&#8226;</Trans>
					&nbsp;
					<Trans i18nKey="policy.rules.table.blurSecondTextPrefix" />
					<EDSvg className={classes['list__icon']} name="toggle" />
					<Trans i18nKey="policy.rules.table.blurSecondTextPostfix" />
				</li>
			</ul>
		</div>
	);
};

BluePlaceholderView.displayName = 'BluePlaceholderView';
BluePlaceholderView.defaultProps = {};

export default React.memo(BluePlaceholderView);
