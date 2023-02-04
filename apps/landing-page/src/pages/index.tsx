import React from 'react';
import type { NextPage } from 'next';

import Main from '@/containers/Main';

interface IProps {}

const Home: NextPage<IProps> = () => {
	return <Main />;
};

Home.displayName = 'Home';
Home.defaultProps = {};

export default Home;
