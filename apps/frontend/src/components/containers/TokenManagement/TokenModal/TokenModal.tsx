import React, { useState } from 'react';

import TokenModalView from './TokenModal.view';

interface IProps {
	readonly onCloseModal: () => void;
}

const TokenModal: React.FC<IProps> = (props) => {
	const [dispalyRightSideModalState, setDispalyRightSideModalState] = useState<boolean>(false);
	const [clientSecretState, setClientSecretState] = useState<string>('');

	return (
		<TokenModalView
			clientSecret={clientSecretState}
			dispalyRightSideModal={dispalyRightSideModalState}
			setClientSecret={setClientSecretState}
			setDispalyRightSideModal={setDispalyRightSideModalState}
			onCloseModal={props.onCloseModal}
		/>
	);
};

TokenModal.displayName = 'TokenModal';
TokenModal.defaultProps = {};

export default React.memo(TokenModal);
