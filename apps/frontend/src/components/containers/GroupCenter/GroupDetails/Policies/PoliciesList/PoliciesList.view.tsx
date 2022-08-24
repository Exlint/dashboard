import React from 'react';
import Table from 'rc-table';

import type { IPolicyData } from '@/interfaces/libraries';
import type { ITableColumns } from './interfaces/table-columns';
import type { ITableData } from './interfaces/table-data';

import classes from './PoliciesList.module.scss';

interface IProps {
	readonly groupPolicy: IPolicyData[];
	readonly policiesTableColumns: ITableColumns[];
	readonly policiesTableData: ITableData[];
}

const PoliciesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['policiesList']}>
			<Table
				className={classes['tableContainer']}
				columns={props.policiesTableColumns}
				data={props.policiesTableData}
			/>
		</div>
	);
};

PoliciesListView.displayName = 'PoliciesListView';
PoliciesListView.defaultProps = {};

export default React.memo(PoliciesListView);
