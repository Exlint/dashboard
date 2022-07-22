import React, { useState } from 'react';

import TokenModalView from './TokenModal.view';

interface IProps {
	readonly onBackdropClick: () => void;
}

const TokenModal: React.FC<IProps> = (props) => {
	const [dispalyModalRightSideState, setDispalyModalRightSideState] = useState<boolean>(false);

	return (
		<TokenModalView
			dispalyModalRightSide={dispalyModalRightSideState}
			setDispalyModalRightSide={setDispalyModalRightSideState}
			onBackdropClick={props.onBackdropClick}
		/>
	);
};

TokenModal.displayName = 'TokenModal';
TokenModal.defaultProps = {};

export default React.memo(TokenModal);
