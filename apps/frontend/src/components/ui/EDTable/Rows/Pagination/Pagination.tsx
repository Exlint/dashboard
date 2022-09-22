import React from 'react';
import { useSearchParams } from 'react-router-dom';

import PaginationView from './Pagination.view';

interface IProps {
	readonly page: number;
	readonly totalItems: number;
	readonly dataLength: number;
}

const Pagination: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [, setSearchParams] = useSearchParams();

	const onPaginateBackward = () => setSearchParams(() => ({ p: `${props.page - 1}` }));
	const onPaginateForward = () => setSearchParams(() => ({ p: `${props.page + 1}` }));

	return (
		<PaginationView
			page={props.page}
			totalItems={props.totalItems}
			dataLength={props.dataLength}
			onPaginateBackward={onPaginateBackward}
			onPaginateForward={onPaginateForward}
		/>
	);
};

Pagination.displayName = 'Pagination';
Pagination.defaultProps = {};

export default React.memo(Pagination);
