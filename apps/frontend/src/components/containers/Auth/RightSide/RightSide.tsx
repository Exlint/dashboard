import React from 'react';
import { useSearchParams } from 'react-router-dom';

import RightSideView from './RightSide.view';

interface IProps {}

const RightSide: React.FC<IProps> = () => {
	const [searchParams] = useSearchParams();

	const port = searchParams.get('port');

	return <RightSideView port={port} />;
};

RightSide.displayName = 'RightSide';
RightSide.defaultProps = {};

export default React.memo(RightSide);
