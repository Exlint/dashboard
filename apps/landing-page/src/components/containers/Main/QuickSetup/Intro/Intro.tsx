import React from 'react';

import IntroView from './Intro.view';

interface IProps {}

const Intro: React.FC<IProps> = () => {
	return <IntroView />;
};

Intro.displayName = 'Intro';
Intro.defaultProps = {};

export default React.memo(Intro);
