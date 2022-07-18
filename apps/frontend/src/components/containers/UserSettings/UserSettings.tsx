import React, { useState } from 'react';

import UserSettingsView from './UserSettings.view';

interface IProps {}

const UserSettings: React.FC<IProps> = () => {
	const [modalState, setModalState] = useState<boolean>(false);

	const modalChangeHandler = () => {
		if (modalState) {
			return setModalState(() => false);
		}

		return setModalState(() => true);
	};

	return <UserSettingsView modalState={modalState} modalChangeHandler={modalChangeHandler} />;
};

UserSettings.displayName = 'UserSettings';
UserSettings.defaultProps = {};

export default React.memo(UserSettings);
