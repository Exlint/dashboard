import React from 'react';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import type { IGetAllCompliancesResponseData } from '@exlint.io/common';

import noCompliancesImg from '@/images/no-compliances.png';

import ComplianceItem from './ComplianceItem';

import classes from './CompliancesList.module.scss';

interface IProps {
	readonly compliances: IGetAllCompliancesResponseData['compliances'];
}

const CompliancesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return props.compliances.length > 0 ? (
		<div id="compliance-list-container" className={classes['container']}>
			{props.compliances.map((compliance) => (
				<ComplianceItem key={compliance.id} compliance={compliance} />
			))}
			<Element name="compliance-list-end" />
		</div>
	) : (
		<div className={classes['noCompliancesContainer']}>
			<h3 className={classes['noCompliancesContainer__header']}>
				{t('complianceCenter.sideBar.noCompliancesHeader')}
			</h3>
			<img
				className={classes['noCompliancesContainer__img']}
				src={noCompliancesImg}
				alt={t('complianceCenter.sideBar.noCompliancesHeader')}
			/>
		</div>
	);
};

CompliancesListView.displayName = 'CompliancesListView';
CompliancesListView.defaultProps = {};

export default React.memo(CompliancesListView);
