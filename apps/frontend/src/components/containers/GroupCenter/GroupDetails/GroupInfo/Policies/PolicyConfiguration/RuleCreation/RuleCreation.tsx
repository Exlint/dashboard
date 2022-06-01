import React from 'react';

import RuleCreationView from './RuleCreation.view';

interface IProps {
	readonly policyLabelInput: string | null;
}

const RuleCreation: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <RuleCreationView policyLabelInput={props.policyLabelInput} />;
};

RuleCreation.displayName = 'RuleCreation';
RuleCreation.defaultProps = {};

export default React.memo(RuleCreation);
