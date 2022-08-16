import React, { useState, useEffect } from 'react';

import { backendApi } from '@/utils/http';
import { addDaysToDate } from '@/utils/date';
import { expiryDays } from '@/data/secret-expiry';
import type { ICreateSecretResponseData } from '@/interfaces/responses';

import LeftSideView from './LeftSide.view';

interface IProps {
	readonly setClientSecret: React.Dispatch<React.SetStateAction<string>>;
	readonly dispalyRightSideModal: boolean;
	readonly setDispalyRightSideModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftSide: React.FC<IProps> = (props) => {
	const [labelState, setLabelState] = useState<string>('');
	const [selectedSortByOptionIndexState, setSelectedSortByOptionIndexState] = useState<number | null>(null);
	const [createSecretButtonState, setCreateSecretButtonState] = useState<boolean>(false);
	const [isSortByClickedState, setIsSortByClickedState] = useState<boolean>(false);
	const [isExpiresClickedState, setExpiresClickedState] = useState<boolean | null>(false);
	const [expiryDateState, setExpiryDateState] = useState<Date>(new Date());

	useEffect(() => {
		if (labelState && labelState.length >= 2 && selectedSortByOptionIndexState !== null) {
			setCreateSecretButtonState(() => true);
		} else {
			setCreateSecretButtonState(() => false);
		}
	}, [labelState, selectedSortByOptionIndexState]);

	const onDisplayRightSide = () => {
		props.setDispalyRightSideModal(() => true);
		setCreateSecretButtonState(() => false);
	};

	const onLabelChange = (value: string) => setLabelState(() => value);

	const onDatePicker = (value: Date) => setExpiryDateState(() => value);

	const onSelectedSortBy = (index: number) => {
		setSelectedSortByOptionIndexState(() => index);
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
				props.setClientSecret(() => response.data.clientSecret);
				props.setDispalyRightSideModal(() => true);
				setCreateSecretButtonState(() => false);
			});
	};

	return (
		<LeftSideView
			isExpiresClickedState={isExpiresClickedState}
			selectedSortByOptionIndexState={selectedSortByOptionIndexState}
			isSortByClickedState={isSortByClickedState}
			labelState={labelState}
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
