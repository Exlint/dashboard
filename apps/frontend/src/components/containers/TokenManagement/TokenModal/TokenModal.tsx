import React, { useState } from 'react';

import TokenModalView from './TokenModal.view';

interface IProps {
	readonly onCloseModal: () => void;
	readonly onRenderTable: () => void;
}

const TokenModal: React.FC<IProps> = (props) => {
	const [dispalyRightSideModalState, setDispalyRightSideModalState] = useState<boolean>(false);
	const [clientSecretState, setClientSecretState] = useState<string | null>(null);
	const [secretLabelState, setSecretLabelState] = useState<string | null>(null);

	const onSecretLabelChange = (value: string) => setSecretLabelState(() => value);
	const onClientSecretChange = (value: string) => setClientSecretState(() => value);

	return (
		<TokenModalView
			clientSecret={clientSecretState}
			secretLabel={secretLabelState}
			dispalyRightSideModal={dispalyRightSideModalState}
			setDispalyRightSideModal={setDispalyRightSideModalState}
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
