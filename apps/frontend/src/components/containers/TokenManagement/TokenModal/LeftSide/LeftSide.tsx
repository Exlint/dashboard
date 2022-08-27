import React, { useState, useEffect } from 'react';

import { backendApi } from '@/utils/http';
import { addDaysToDate } from '@/utils/date';
import { expiryDays } from '@/data/secret-expiry';
import type { ICreateSecretResponseData } from '@/interfaces/responses';

import LeftSideView from './LeftSide.view';

interface IProps {
	readonly dispalyRightSideModal: boolean;
	readonly secretLabel: string | null;
	readonly onDisplayModalRightSide: () => void;
	readonly onSecretLabelChange: (_: string) => void;
	readonly onClientSecretChange: (_: string) => void;
}

const LeftSide: React.FC<IProps> = (props) => {
	const [labelState, setLabelState] = useState<string | null>(null);
	const [expirySelectedIndexState, setExpirySelectedIndexState] = useState<number | null>(null);
	const [createSecretButtonState, setCreateSecretButtonState] = useState<boolean>(false);
	const [isSortByClickedState, setIsSortByClickedState] = useState<boolean>(false);
	const [isExpiresClickedState, setExpiresClickedState] = useState<boolean | null>(false);
	const [expiryDateState, setExpiryDateState] = useState<Date>(new Date());

	useEffect(() => {
		if (labelState && labelState.length >= 2 && expirySelectedIndexState !== null) {
			setCreateSecretButtonState(() => true);
		} else {
			setCreateSecretButtonState(() => false);
		}
	}, [labelState, expirySelectedIndexState]);

	const onDisplayRightSide = () => {
		props.onDisplayModalRightSide();
		setCreateSecretButtonState(() => false);
	};

	const onLabelChange = (value: string) => {
		setLabelState(() => value);
		props.onSecretLabelChange(value);
	};

	const onDatePicker = (value: Date) => setExpiryDateState(() => value);

	const onSelectedSortBy = (index: number) => {
		setExpirySelectedIndexState(() => index);
		setIsSortByClickedState(() => false);
		setExpiryDateState(() => addDaysToDate(expiryDays[index]!));
	};

	const onExpiresClicked = () => setExpiresClickedState((prev) => !prev);
	const onSortBy = () => setIsSortByClickedState((prev) => !prev);

	const onSubmit = () => {
		const formattedDate = expiryDateState.toLocaleDateString('en-ca');

		backendApi
			.post<ICreateSecretResponseData>('user/secrets', {
				label: labelState,
				expiration: formattedDate,
			})
			.then((response) => {
				props.onClientSecretChange(response.data.clientSecret);
				props.onDisplayModalRightSide();
				setCreateSecretButtonState(() => false);
			});
	};

	return (
		<LeftSideView
			isExpiresClickedState={isExpiresClickedState}
			expirySelectedIndexState={expirySelectedIndexState}
			isSortByClickedState={isSortByClickedState}
			labelState={labelState}
			secretLabel={props.secretLabel}
			createSecretButtonState={createSecretButtonState}
			dispalyRightSideModal={props.dispalyRightSideModal}
			expiryDate={expiryDateState}
			onDatePicker={onDatePicker}
			onSubmit={onSubmit}
			onDisplayRightSide={onDisplayRightSide}
			onLabelChange={onLabelChange}
			onSelectedSortBy={onSelectedSortBy}
			onExpiresClicked={onExpiresClicked}
			onSortBy={onSortBy}
		/>
	);
};

LeftSide.displayName = 'LeftSide';
LeftSide.defaultProps = {};

export default React.memo(LeftSide);
