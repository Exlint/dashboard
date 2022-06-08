import React from 'react';
import { useHistory } from 'react-router-dom';

import NavigateBackButtonView from './NavigateBackButton.view';

interface IProps {
	readonly position: {
		readonly bottom: string;
		readonly right: string;
	};
}

const NavigateBackButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const history = useHistory();

	const onGoBack = () => {
		history.goBack();
	};

	return <NavigateBackButtonView position={props.position} onGoBack={onGoBack} />;
};

NavigateBackButton.displayName = 'NavigateBackButton';
NavigateBackButton.defaultProps = {};

export default React.memo(NavigateBackButton);
