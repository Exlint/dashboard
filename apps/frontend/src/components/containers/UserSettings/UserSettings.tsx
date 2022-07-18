import React, { useState } from 'react';

import UserSettingsView from './UserSettings.view';

interface IProps {}

const UserSettings: React.FC<IProps> = () => {
	const [isModelOnViewState, setIsModelOnViewState] = useState<boolean>(false);

	const modalChangeHandler = () => {
		setIsModelOnViewState((prevState) => !prevState);
	};

	return (
		<UserSettingsView isModelOnViewState={isModelOnViewState} modalChangeHandler={modalChangeHandler} />
	);
};

UserSettings.displayName = 'UserSettings';
UserSettings.defaultProps = {};

export default React.memo(UserSettings);
