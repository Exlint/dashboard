import React from 'react';
import { useTranslation } from 'react-i18next';
import type { IGetAllCompliancesResponseData } from '@exlint.io/common';

import EDInputField from '@/ui/EDInputField';
import EDAcceptButton from '@/ui/EDAcceptButton';

import CompliancesList from './CompliancesList';

import classes from './SideBar.module.scss';

interface IProps {
	readonly compliances: IGetAllCompliancesResponseData['compliances'];
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

			<CompliancesList compliances={props.compliances} />
		</aside>
	);
};

SideBarView.displayName = 'SideBarView';
SideBarView.defaultProps = {};

export default React.memo(SideBarView);
