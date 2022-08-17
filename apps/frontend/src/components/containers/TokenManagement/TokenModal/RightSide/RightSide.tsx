import React, { useState } from 'react';

import RightSideView from './RightSide.view';

interface IProps {
	readonly clientSecret: string | null;
	readonly secretLabel: string | null;
	readonly onCloseModal: () => void;
}

const RightSide: React.FC<IProps> = (props) => {
	const [copyTokenState, setCopyTokenState] = useState(false);

	const onCopyToken = async () => {
		setCopyTokenState(true);

		await navigator.clipboard.writeText(props.clientSecret!);

		setTimeout(() => setCopyTokenState(false), 2000);
	};

	return (
		<RightSideView
			clientSecret={props.clientSecret}
			secretLabel={props.secretLabel}
			copyToken={copyTokenState}
			onCloseModal={props.onCloseModal}
			onCopyToken={onCopyToken}
		/>
	);
};

RightSide.displayName = 'RightSide';
RightSide.defaultProps = {};

export default React.memo(RightSide);
