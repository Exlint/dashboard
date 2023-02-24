import React from 'react';

import NewPolicy from '@/containers/NewPolicy';
import Page from '@/helpers/Page';

interface IProps {}

const NewPolicyPage: React.FC<IProps> = () => {
	return (
		<Page>
			<NewPolicy />
		</Page>
	);
};

NewPolicyPage.displayName = 'NewPolicyPage';
NewPolicyPage.defaultProps = {};

export default NewPolicyPage;
