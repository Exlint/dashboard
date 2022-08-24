import React from 'react';
import { useNavigate } from 'react-router-dom';

import EDNavigateBackButtonView from './EDNavigateBackButton.view';

interface IProps {}

const EDNavigateBackButton: React.FC<IProps> = () => {
	const navigate = useNavigate();

	return <EDNavigateBackButtonView onGoBack={() => navigate(-1)} />;
};

EDNavigateBackButton.displayName = 'EDNavigateBackButton';
EDNavigateBackButton.defaultProps = {};

export default React.memo(EDNavigateBackButton);
