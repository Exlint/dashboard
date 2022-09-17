import React from 'react';

import LabelInputView from './LabelInput.view';

interface IProps {
	readonly secretLabelInput: string | null;
	readonly isSecretLabelAvailable: boolean | null;
	readonly onSecretLabelInputChange: (value: string) => void;
}

const LabelInput: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<LabelInputView
			secretLabelInput={props.secretLabelInput}
			isSecretLabelAvailable={props.isSecretLabelAvailable}
			onSecretLabelInputChange={props.onSecretLabelInputChange}
		/>
	);
};

LabelInput.displayName = 'LabelInput';
LabelInput.defaultProps = {};

export default React.memo(LabelInput);
