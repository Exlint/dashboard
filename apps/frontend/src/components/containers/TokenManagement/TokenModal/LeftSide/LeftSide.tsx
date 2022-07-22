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

	const onLabelChange = (value: string) => {
		setLabelState(() => value);
	};

	const onSelectedSortBy = (index: number) => {
		setSelectedSortByOptionIndexState(() => index);
		setisSortByClickedState(() => false);
	};

	const onExpiresClicked = () => {
		setExpiresClickedState((prevState) => !prevState);
	};

	const onSortBy = () => {
		setisSortByClickedState((prevState) => !prevState);
	};

	return (
		<LeftSideView
			isExpiresClickedState={isExpiresClickedState}
			selectedSortByOptionIndexState={selectedSortByOptionIndexState}
			isSortByClickedState={isSortByClickedState}
			labelState={labelState}
			createSecretButtonState={createSecretButtonState}
			dispalyModalRightSide={props.dispalyModalRightSide}
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
