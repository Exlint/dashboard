import React from 'react';

import FormView from './Form.view';

interface IProps {}

const Form: React.FC<IProps> = () => {
	return <FormView />;
};

Form.displayName = 'Form';
Form.defaultProps = {};

export default React.memo(Form);
