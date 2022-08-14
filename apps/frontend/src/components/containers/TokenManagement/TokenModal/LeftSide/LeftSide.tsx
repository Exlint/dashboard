import React, { useState, useEffect } from 'react';
import type { AxiosResponse } from 'axios';

import { backendApi } from '@/utils/http';
import { addDaysToDate } from '@/utils/addDaysToDate';
import type { ICreateSecretResponseData } from '@/interfaces/responses';

import LeftSideView from './LeftSide.view';

interface IProps {
	readonly setClientSecret: React.Dispatch<React.SetStateAction<string>>;
	readonly dispalyModalRightSide: boolean;
	readonly setDispalyModalRightSide: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftSide: React.FC<IProps> = (props) => {
	const [labelState, setLabelState] = useState<string>('');
	const [selectedSortByOptionIndexState, setSelectedSortByOptionIndexState] = useState<number | null>(null);
	const [createSecretButtonState, setCreateSecretButtonState] = useState<boolean>(false);
	const [isSortByClickedState, setIsSortByClickedState] = useState<boolean>(false);
	const [isExpiresClickedState, setExpiresClickedState] = useState<boolean | null>(false);
	const [expiryDateState, setExpiryDateState] = useState<Date | string>(new Date());

	useEffect(() => {
		if (
			labelState &&
			labelState.length >= 2 &&
			labelState.length <= 20 &&
			selectedSortByOptionIndexState !== null
		) {
			setCreateSecretButtonState(() => true);
		} else {
			setCreateSecretButtonState(() => false);
		}
	}, [labelState, selectedSortByOptionIndexState]);

	const onDisplayRightSide = () => {
		props.setDispalyModalRightSide(() => true);
		setCreateSecretButtonState(() => false);
	};

	const onLabelChange = (value: string) => setLabelState(() => value);

	const onDatePicker = (value: Date) => {
		const formattedDate = value.toLocaleDateString('en-ca');

		setExpiryDateState(() => formattedDate);
	};

	const onSelectedSortBy = (index: number) => {
		setSelectedSortByOptionIndexState(() => index);
		setIsSortByClickedState(() => false);

		if (index === 0) {
			setExpiryDateState(() => addDaysToDate(7));
		} else if (index === 1) {
			setExpiryDateState(() => addDaysToDate(30));
		} else if (index === 2) {
			setExpiryDateState(() => addDaysToDate(60));
		} else if (index === 3) {
			setExpiryDateState(() => addDaysToDate(90));
		} else if (index === 5) {
			setExpiryDateState(() => '');
		}
	};

	const onExpiresClicked = () => setExpiresClickedState((prev) => !prev);
	const onSortBy = () => setIsSortByClickedState((prev) => !prev);

	const onSubmit = () => {
		backendApi
			.post('user/secrets', {
				label: labelState,
				expiration: expiryDateState,
			})
			.then((response: AxiosResponse<ICreateSecretResponseData>) => {
				props.setClientSecret(() => response.data.clientSecret);
				props.setDispalyModalRightSide(() => true);
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
			dispalyModalRightSide={props.dispalyModalRightSide}
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
