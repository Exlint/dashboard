import React from 'react';
import Table from 'rc-table';

import { IPolicy } from '@/interfaces/policy';

import classes from './PoliciesList.module.scss';
import { ITableColumns } from './interfaces/table-columns';
import { ITableData } from './interfaces/table-data';

interface IProps {
	readonly groupPolicy: IPolicy[];
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
				style={{ border: '2px solid blue' }}
			/>
		</div>
	);
};

PoliciesListView.displayName = 'PoliciesListView';
PoliciesListView.defaultProps = {};

export default React.memo(PoliciesListView);
