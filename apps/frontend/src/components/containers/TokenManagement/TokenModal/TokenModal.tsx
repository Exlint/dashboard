import React, { useState } from 'react';

import TokenModalView from './TokenModal.view';

interface IProps {
	readonly onCloseModal: () => void;
	readonly onRenderTable: () => void;
	readonly dispalyRightSideModal: boolean;
	readonly onDisplayModalRightSide: () => void;
}

const TokenModal: React.FC<IProps> = (props) => {
	const [clientSecretState, setClientSecretState] = useState<string | null>(null);
	const [secretLabelState, setSecretLabelState] = useState<string | null>(null);

	const onSecretLabelChange = (value: string) => setSecretLabelState(() => value);
	const onClientSecretChange = (value: string) => setClientSecretState(() => value);

	return (
		<TokenModalView
			clientSecret={clientSecretState}
			secretLabel={secretLabelState}
			dispalyRightSideModal={props.dispalyRightSideModal}
			onDisplayModalRightSide={props.onDisplayModalRightSide}
			onSecretLabelChange={onSecretLabelChange}
			onClientSecretChange={onClientSecretChange}
			onCloseModal={props.onCloseModal}
			onRenderTable={props.onRenderTable}
		/>
	);
};

TokenModal.displayName = 'TokenModal';
TokenModal.defaultProps = {};

export default React.memo(TokenModal);
