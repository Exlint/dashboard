import React from 'react';

import TablePlaceholderView from './TablePlaceholder.view';

interface IProps {}

const TablePlaceholder: React.FC<IProps> = () => {
	return <TablePlaceholderView />;
};

TablePlaceholder.displayName = 'TablePlaceholder';
TablePlaceholder.defaultProps = {};

export default React.memo(TablePlaceholder);
