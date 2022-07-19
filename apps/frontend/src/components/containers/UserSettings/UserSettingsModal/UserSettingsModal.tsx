import React, { useEffect, useState } from 'react';

import UserSettingsModalView from './UserSettingsModal.view';

interface IProps {
	readonly onBackdropClick: () => void;
}

const UserSettingsModal: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
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
			onBackdropClick={props.onBackdropClick}
			onDeleteUserChangeHandler={onDeleteUserChangeHandler}
		/>
	);
};

UserSettingsModal.displayName = 'UserSettingsModal';
UserSettingsModal.defaultProps = {};

export default React.memo(UserSettingsModal);
