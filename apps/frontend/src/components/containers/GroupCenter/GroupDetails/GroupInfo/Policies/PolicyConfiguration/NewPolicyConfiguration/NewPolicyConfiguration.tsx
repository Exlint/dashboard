import React from 'react';

import NewPolicyConfigurationView from './NewPolicyConfiguration.view';

interface IProps {
	readonly policyLabelInput: string | null;
}

const NewPolicyConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <NewPolicyConfigurationView policyLabelInput={props.policyLabelInput} />;
};

NewPolicyConfiguration.displayName = 'NewPolicyConfiguration';
NewPolicyConfiguration.defaultProps = {};

export default React.memo(NewPolicyConfiguration);
