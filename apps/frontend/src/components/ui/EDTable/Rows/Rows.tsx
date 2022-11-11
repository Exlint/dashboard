import React, { type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

import RowsView from './Rows.view';

interface IProps {
	readonly data: ReactNode[][];
	readonly dataLinks?: string[];
	readonly totalItems: number;
}

const Rows: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [searchParams] = useSearchParams();
	const page = searchParams.get('p');
	const isPageANumber = !isNaN(parseInt(page ?? ''));
	const realPage = isPageANumber ? parseInt(page!) : 1;

	return (
		<RowsView
			data={props.data}
			page={realPage}
			totalItems={props.totalItems}
			dataLinks={props.dataLinks}
		/>
	);
};

Rows.displayName = 'Rows';
Rows.defaultProps = {};

export default React.memo(Rows);
