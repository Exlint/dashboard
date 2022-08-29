import React, { useState } from 'react';

import PolicyView from './Policy.view';

interface IProps {}

const Policy: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	console.log(props);

	const [isModelOnViewState, setIsModelOnViewState] = useState<boolean>(false);

	const onOpenModal = () => setIsModelOnViewState(() => true);
	const onCloseModal = () => setIsModelOnViewState(() => false);

	return (
		<PolicyView
			isModelOnView={isModelOnViewState}
			onOpenModal={onOpenModal}
			onCloseModal={onCloseModal}
		/>
	);
};

Policy.displayName = 'Policy';
Policy.defaultProps = {};

export default React.memo(Policy);
