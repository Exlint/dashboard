import React from 'react';
import { useNavigate } from 'react-router-dom';

import NavigateBackButtonView from './NavigateBackButton.view';

interface IProps {
	readonly position: {
		readonly bottom: string;
		readonly right: string;
	};
}

const NavigateBackButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	return <NavigateBackButtonView position={props.position} onGoBack={() => navigate(-1)} />;
};

NavigateBackButton.displayName = 'NavigateBackButton';
NavigateBackButton.defaultProps = {};

export default React.memo(NavigateBackButton);
