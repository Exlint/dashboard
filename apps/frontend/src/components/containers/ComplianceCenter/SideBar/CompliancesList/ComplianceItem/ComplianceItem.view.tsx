import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import type { IGetAllCompliancesResponseData } from '@exlint.io/common';
import { Link } from 'react-router-dom';

import { concatClasses } from '@/utils/component';
import EDSvg from '@/ui/EDSvg';
import logosObject from '@/utils/libraries-logos';
import type { ArrayElement } from '@/types/array-element';

import classes from './ComplianceItem.module.scss';

interface IProps {
	readonly compliance: ArrayElement<IGetAllCompliancesResponseData['compliances']>;
	readonly isSelected: boolean;
	readonly onCopyComplianceId: () => void;
}

const ComplianceItemView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const policiesNames = props.compliance.librariesNames.slice(0, 4).map((item) => {
		return item.toLowerCase() as keyof typeof logosObject;
	});

	return (
		<div key={props.compliance.id} className={classes['container']}>
			<Link
				className={concatClasses(
					classes,
					'complianceItem',
					props.isSelected ? 'complianceItem--selected' : null,
				)}
				to={`/compliance-center/${props.compliance.id}/policies`}
			>
				<h3
					className={concatClasses(
						classes,
						'complianceItem__label',
						props.isSelected ? 'complianceItem__label--selected' : null,
					)}
				>
					{props.compliance.label}
				</h3>
				<div className={classes['complianceIdContainer']}>
					<span className={classes['complianceIdContainer__value']}>
						{t('complianceCenter.uniqueId')}
						<Trans>&#58;</Trans>
						&nbsp;
						{props.compliance.id.substring(0, 7)}
						<Trans>&#8230;</Trans>
					</span>
					<EDSvg
						className={classes['complianceIdContainer__icon']}
						name="copy"
						onClick={props.onCopyComplianceId}
					/>
				</div>
				<div className={classes['policiesContainer']}>
					<span className={classes['policiesContainer__text']}>
						{t('complianceCenter.sideBar.policies')}
						<Trans>&#58;</Trans>
					</span>
					{policiesNames.map((libraryName, index) => (
						<div key={index} className={classes['policyItem']}>
							{libraryName && (
								<img
									className={classes['policyItem__img']}
									src={logosObject[libraryName]}
									alt={libraryName}
								/>
							)}
						</div>
					))}
				</div>
			</Link>
			{props.isSelected && <div className={classes['container__border']} />}
		</div>
	);
};

ComplianceItemView.displayName = 'ComplianceItemView';
ComplianceItemView.defaultProps = {};

export default React.memo(ComplianceItemView);
