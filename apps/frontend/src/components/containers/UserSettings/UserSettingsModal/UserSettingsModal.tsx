import React, { useEffect, useState } from 'react';

import UserSettingsModalView from './UserSettingsModal.view';

interface IProps {
	readonly modalChangeHandler: () => void;
}

const UserSettingsModal: React.FC<IProps> = (props) => {
	const [deleteUserInputState, setDeleteUserInputState] = useState<string>('');
	const [confirmButtonState, setConfirmButtonState] = useState<boolean>(false);

	useEffect(() => {
		if (deleteUserInputState === 'DELETE-USER') {
			setConfirmButtonState(() => true);
		} else {
			setConfirmButtonState(() => false);
		}
	}, [deleteUserInputState]);

	const onDeleteUserChangeHandler = (input: string) => setDeleteUserInputState(() => input);

	return (
		<UserSettingsModalView
			confirmButtonState={confirmButtonState}
			modalChangeHandler={props.modalChangeHandler}
			onDeleteUserChangeHandler={onDeleteUserChangeHandler}
		/>
	);
};

UserSettingsModal.displayName = 'UserSettingsModal';
UserSettingsModal.defaultProps = {};

export default React.memo(UserSettingsModal);
