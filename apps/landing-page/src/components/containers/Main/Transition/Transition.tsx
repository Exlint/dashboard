import React, { useState } from 'react';

import TransitionView from './Transition.view';

interface IProps {}

const Transition: React.FC<IProps> = () => {
	const [isVisibleState, setIsVisibleState] = useState<boolean>(false);

	const onViewPort = (isVisible: boolean) => {
		isVisible && setIsVisibleState(() => true);
	};

	return <TransitionView isVisible={isVisibleState} onViewPort={onViewPort} />;
};

Transition.displayName = 'Transition';
Transition.defaultProps = {};

export default React.memo(Transition);
