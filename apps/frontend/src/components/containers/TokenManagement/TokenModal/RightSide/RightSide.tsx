import React, { useState } from 'react';

import RightSideView from './RightSide.view';

interface IProps {
	readonly onCloseModal: () => void;
}

const RightSide: React.FC<IProps> = (props) => {
	const [tokenState] = useState<string>('cowencoewnc');
	const [copyTokenState, setCopyTokenState] = useState(false);

	const onCopyToken = async () => {
		setCopyTokenState(true);

		await navigator.clipboard.writeText(tokenState);

		setTimeout(() => setCopyTokenState(false), 2000);
	};

	return (
		<RightSideView
			tokenState={tokenState}
			copyTokenState={copyTokenState}
			onCloseModal={props.onCloseModal}
			onCopyToken={onCopyToken}
		/>
	);
};

RightSide.displayName = 'RightSide';
RightSide.defaultProps = {};

export default React.memo(RightSide);
