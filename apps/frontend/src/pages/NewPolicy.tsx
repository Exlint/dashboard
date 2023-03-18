import React from 'react';

import NewPolicy from '@/containers/NewPolicy';

interface IProps {}

const NewPolicyPage: React.FC<IProps> = () => {
	return <NewPolicy />;
};

NewPolicyPage.displayName = 'NewPolicyPage';
NewPolicyPage.defaultProps = {};

export default NewPolicyPage;
