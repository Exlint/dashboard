import React from 'react';

import Policy from '@/containers/Policy';
import Page from '@/helpers/Page';

interface IProps {}

const PolicyPage: React.FC<IProps> = () => {
	return (
		<Page>
			<Policy />
		</Page>
	);
};

PolicyPage.displayName = 'PolicyPage';
PolicyPage.defaultProps = {};

export default PolicyPage;
