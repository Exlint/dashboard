import React from 'react';

import TokenModalView from './TokenModal.view';

interface IProps {
	readonly onCloseModal: () => void;
	readonly onRenderTable: () => void;
	readonly dispalyRightSideModal: boolean;
	readonly onDisplayModalRightSide: () => void;
	readonly clientSecretState: string | null;
	readonly secretLabelState: string | null;
	readonly onClientSecretChange: (_: string) => void;
	readonly onSecretLabelChange: (_: string) => void;
}

const TokenModal: React.FC<IProps> = (props) => {
	return (
		<TokenModalView
			clientSecret={props.clientSecretState}
			secretLabel={props.secretLabelState}
			dispalyRightSideModal={props.dispalyRightSideModal}
			onDisplayModalRightSide={props.onDisplayModalRightSide}
			onSecretLabelChange={props.onSecretLabelChange}
			onClientSecretChange={props.onClientSecretChange}
			onCloseModal={props.onCloseModal}
			onRenderTable={props.onRenderTable}
		/>
	);
};

TokenModal.displayName = 'TokenModal';
TokenModal.defaultProps = {};

export default React.memo(TokenModal);
