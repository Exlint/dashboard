import { backendApi } from '@/utils/http';
import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';

// Import { secretExpiry } from '@/data/secretExpiry';

import LeftSideView from './LeftSide.view';

interface IProps {
	readonly dispalyModalRightSide: boolean;
	readonly setDispalyModalRightSide: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftSide: React.FC<IProps> = (props) => {
	const [labelState, setLabelState] = useState<string>('');
	const [selectedSortByOptionIndexState, setSelectedSortByOptionIndexState] = useState<number | null>(null);
	const [createSecretButtonState, setCreateSecretButtonState] = useState<boolean>(false);
	const [isSortByClickedState, setisSortByClickedState] = useState<boolean>(false);
	const [isExpiresClickedState, setExpiresClickedState] = useState<boolean | null>(false);
	const [expiryDateState, setExpiryDateState] = useState<Date>(new Date());

	useEffect(() => {
		if (labelState && selectedSortByOptionIndexState) {
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

	const onDatePicker = (value: Date) => setExpiryDateState(() => value);

	const onSubmit = () => {
		backendApi
			.post('user/secrets', {
				label: labelState,
				expiration: expiryDateState,
			})
			.then((response: AxiosResponse) => {
				console.log(response);
			});
	};

	const onSelectedSortBy = (index: number) => {
		setSelectedSortByOptionIndexState(() => index);
		setisSortByClickedState(() => false);
	};

	const onExpiresClicked = () => setExpiresClickedState((prev) => !prev);

	const onSortBy = () => setisSortByClickedState((prev) => !prev);

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
