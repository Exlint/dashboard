import React, { useState } from 'react';

import UserSettingsModalView from './UserSettingsModal.view';

interface IProps {
	readonly onBackdropClick: () => void;
}

const UserSettingsModal: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isConfirmButtonDisabledState, setIsConfirmButtonDisabledState] = useState<boolean>(false);

	const onDeleteUserChangeHandler = (input: string) => {
		if (input === 'DELETE-USER') {
			setIsConfirmButtonDisabledState(() => true);
		} else {
			setIsConfirmButtonDisabledState(() => false);
		}
	};

	return (
		<UserSettingsModalView
			isConfirmButtonDisabled={isConfirmButtonDisabledState}
			onBackdropClick={props.onBackdropClick}
			onDeleteUserChangeHandler={onDeleteUserChangeHandler}
		/>
	);
};

UserSettingsModal.displayName = 'UserSettingsModal';
UserSettingsModal.defaultProps = {};

export default React.memo(UserSettingsModal);
