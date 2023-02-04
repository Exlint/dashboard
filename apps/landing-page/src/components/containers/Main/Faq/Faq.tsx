import React from 'react';

import FaqView from './Faq.view';

interface IProps {}

const Faq: React.FC<IProps> = () => {
	return <FaqView />;
};

Faq.displayName = 'Faq';
Faq.defaultProps = {};

export default React.memo(Faq);
