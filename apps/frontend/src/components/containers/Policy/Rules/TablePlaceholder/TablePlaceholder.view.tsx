import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import emptyRulesPlaceholderImg from '@/images/empty-rules-placeholder.png';

import classes from './TablePlaceholder.module.scss';

interface IProps {}

const TablePlaceholderView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<h3 className={classes['container__header']}>{t('policy.rules.table.placeholderHeader')}</h3>

			<img className={classes['container__img']} src={emptyRulesPlaceholderImg} alt="Exlint" />

			<span className={classes['container__bottomText']}>
				<Trans i18nKey="policy.rules.table.placeholderBottomText" />
			</span>
		</div>
	);
};

TablePlaceholderView.displayName = 'TablePlaceholderView';
TablePlaceholderView.defaultProps = {};

export default React.memo(TablePlaceholderView);
