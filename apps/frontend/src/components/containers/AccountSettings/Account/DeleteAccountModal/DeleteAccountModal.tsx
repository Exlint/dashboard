import React, { type FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { backendApi } from '@/utils/http';
import { authActions } from '@/store/reducers/auth';

import DeleteAccountModalView from './DeleteAccountModal.view';

interface IPropsFromDispatch {
	readonly setUnauthenticated: () => PayloadAction;
}

interface IProps extends IPropsFromDispatch {
	readonly onClose: VoidFunction;
}

const DeleteAccountModal: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [isConfirmButtonDisabledState, setIsConfirmButtonDisabledState] = useState<boolean>(true);

	const onDelete = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		backendApi.delete('/user/auth').then(() => {
			props.setUnauthenticated();

			navigate('/auth');
		});
	};

	const onDeleteAccountInputChangeHandler = (input: string) => {
		setIsConfirmButtonDisabledState(
			() => input !== t('accountSettings.account.deleteModal.actionPhraseText'),
		);
	};

	return (
		<DeleteAccountModalView
			isConfirmButtonDisabled={isConfirmButtonDisabledState}
			onClose={props.onClose}
			onDelete={onDelete}
			onDeleteAccountInputChangeHandler={onDeleteAccountInputChangeHandler}
		/>
	);
};

DeleteAccountModal.displayName = 'DeleteAccountModal';
DeleteAccountModal.defaultProps = {};

export default connect(null, {
	setUnauthenticated: authActions.setUnauthenticated,
})(React.memo(DeleteAccountModal));
