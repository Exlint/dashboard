import React from 'react';

import CliAuth from '@/containers/CliAuth';
import Page from '@/helpers/Page';

interface IProps {}

const CliAuthPage: React.FC<IProps> = () => {
	return (
		<Page>
			<CliAuth />
		</Page>
	);
};

CliAuthPage.displayName = 'CliAuthPage';
CliAuthPage.defaultProps = {};

export default CliAuthPage;
