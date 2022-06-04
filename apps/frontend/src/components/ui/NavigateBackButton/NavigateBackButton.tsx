import React from 'react';
import { useHistory } from 'react-router-dom';

import NavigateBackButtonView from './NavigateBackButton.view';

interface IProps {}

const NavigateBackButton: React.FC<IProps> = () => {
	const history = useHistory();

	const onGoBack = () => {
		history.goBack();
	};

	return <NavigateBackButtonView onGoBack={onGoBack} />;
};

NavigateBackButton.displayName = 'NavigateBackButton';
NavigateBackButton.defaultProps = {};

export default React.memo(NavigateBackButton);
