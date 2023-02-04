import React from 'react';

import FirstRowView from './FirstRow.view';

interface IProps {}

const FirstRow: React.FC<IProps> = () => {
	return <FirstRowView />;
};

FirstRow.displayName = 'FirstRow';
FirstRow.defaultProps = {};

export default React.memo(FirstRow);
