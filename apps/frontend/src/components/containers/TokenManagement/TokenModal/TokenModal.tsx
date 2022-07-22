import React, { useState } from 'react';

import TokenModalView from './TokenModal.view';

interface IProps {
	readonly onBackdropClick: () => void;
}

const TokenModal: React.FC<IProps> = (props) => {
	const [dispalyModalRightSide, setDispalyModalRightSide] = useState<boolean>(false);

	return (
		<TokenModalView
			dispalyModalRightSide={dispalyModalRightSide}
			setDispalyModalRightSide={setDispalyModalRightSide}
			onBackdropClick={props.onBackdropClick}
		/>
	);
};

TokenModal.displayName = 'TokenModal';
TokenModal.defaultProps = {};

export default React.memo(TokenModal);
