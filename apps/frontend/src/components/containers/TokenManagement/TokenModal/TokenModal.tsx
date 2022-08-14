import React, { useState } from 'react';

import TokenModalView from './TokenModal.view';

interface IProps {
	readonly onCloseModal: () => void;
}

const TokenModal: React.FC<IProps> = (props) => {
	const [dispalyModalRightSideState, setDispalyModalRightSideState] = useState<boolean>(false);
	const [clientSecretState, setClientSecretState] = useState<string>('');

	return (
		<TokenModalView
			clientSecret={clientSecretState}
			dispalyModalRightSide={dispalyModalRightSideState}
			setClientSecret={setClientSecretState}
			setDispalyModalRightSide={setDispalyModalRightSideState}
			onCloseModal={props.onCloseModal}
		/>
	);
};

TokenModal.displayName = 'TokenModal';
TokenModal.defaultProps = {};

export default React.memo(TokenModal);
