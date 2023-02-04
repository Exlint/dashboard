import React from 'react';

import FallingStarsView from './FallingStars.view';

interface IProps {}

const FallingStars: React.FC<IProps> = () => {
	return <FallingStarsView />;
};

FallingStars.displayName = 'FallingStars';
FallingStars.defaultProps = {};

export default React.memo(FallingStars);
