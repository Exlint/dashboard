import React from 'react';
import { useTranslation } from 'react-i18next';

import EDInputField from '@/ui/EDInputField';
import EDAcceptButton from '@/ui/EDAcceptButton';
import noCompliancesImg from '@/images/no-compliances.png';
import type { ISideBarCompliance } from '@/store/interfaces/compliances';

import classes from './SideBar.module.scss';
import CompliancesList from './CompliancesList';

interface IProps {
	readonly compliances: ISideBarCompliance[];
	readonly searchInput: string | null;
	readonly isNewComplianceButtonDisabled: boolean;
	readonly onSearchInputChange: (value: string) => void;
	readonly onNewButtonClick: VoidFunction;
}

const SideBarView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<aside className={classes['container']}>
			<div className={classes['actionsContainer']}>
				<EDInputField
					className={classes['actionsContainer__searchInput']}
					placeholder={t('complianceCenter.sideBar.searchInputPlaceholder')}
					value={props.searchInput}
					onChange={props.onSearchInputChange}
				/>
				<EDAcceptButton
					type="button"
					iconName="circleAdd"
					disabled={props.isNewComplianceButtonDisabled}
					onClick={props.onNewButtonClick}
				>
					{t('complianceCenter.sideBar.newComplianceAction')}
				</EDAcceptButton>
			</div>

			<hr className={classes['container__divider']} />

			{props.compliances.length === 0 ? (
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
			) : (
				<CompliancesList compliances={props.compliances} />
			)}
		</aside>
	);
};

SideBarView.displayName = 'SideBarView';
SideBarView.defaultProps = {};

export default React.memo(SideBarView);
