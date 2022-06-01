import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';

import { IGroup } from '@/interfaces/group';

import classes from './PoliciesList.module.scss';

interface IProps {
	readonly selectedGroup: IGroup | null;
}

const PoliciesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['policiesList']}>
			<h3>{props.selectedGroup?.title}</h3>
		</div>
	);
};

PoliciesListView.displayName = 'PoliciesListView';
PoliciesListView.defaultProps = {};

export default React.memo(PoliciesListView);
