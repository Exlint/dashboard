import React from 'react';

import SecondRowView from './SecondRow.view';

interface IProps {}

const SecondRow: React.FC<IProps> = () => {
	return <SecondRowView />;
};

SecondRow.displayName = 'SecondRow';
SecondRow.defaultProps = {};

export default React.memo(SecondRow);
