import React, { useState } from 'react';

import UserSettingsModalView from './UserSettingsModal.view';

interface IProps {
	readonly onBackdropClick: () => void;
}

const UserSettingsModal: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [confirmButtonState, setConfirmButtonState] = useState<boolean>(false);

	const onDeleteUserChangeHandler = (input: string) => {
		if (input === 'DELETE-USER') {
			setConfirmButtonState(() => true);
		} else {
			setConfirmButtonState(() => false);
		}
	};

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
