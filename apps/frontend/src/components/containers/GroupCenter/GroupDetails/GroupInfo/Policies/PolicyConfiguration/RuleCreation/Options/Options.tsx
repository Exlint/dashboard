import React from 'react';

import OptionsView from './Options.view';

interface IProps {
	readonly policyLabelInput: string | null;
}

const Options: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <OptionsView policyLabelInput={props.policyLabelInput} />;
};

Options.displayName = 'Options';
Options.defaultProps = {};

export default React.memo(Options);
