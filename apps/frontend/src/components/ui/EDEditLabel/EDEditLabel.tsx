import React, { useEffect, useState } from 'react';

import { backendApi } from '@/utils/http';

import EDEditLabelView from './EDEditLabel.view';

interface IProps {
	readonly elementId: string;
	readonly elementLabel: string;
	readonly apiPath: string;
	readonly onUpdateSideBarLabel: (elementId: string, newLabel: string) => void;
}

const EDEditLabel: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [labelState, setLabelState] = useState<string>('');
	const [isLabelOnEditState, setIsLabelOnEditState] = useState<boolean>(false);

	const onEditLabelClick = (isEdit: boolean) => setIsLabelOnEditState(() => isEdit);

	const onChangeLabel = (newLabel: string) => {
		if (newLabel.length >= 0 && newLabel.length <= 20) {
			setLabelState(() => newLabel);
		}
	};

	const onCancelLabelChanges = () => {
		setLabelState(() => props.elementLabel);
		setIsLabelOnEditState(() => false);
	};

	const onUpdateLabel = () => {
		const oldLabel = labelState;
		let newLabel = labelState;

		if (labelState === '') {
			newLabel = props.elementLabel;
		}

		props.onUpdateSideBarLabel(props.elementId, newLabel);
		setIsLabelOnEditState(() => false);

		backendApi
			.patch(props.apiPath, {
				label: newLabel,
			})
			.then()
			.catch(() => {
				props.onUpdateSideBarLabel(props.elementId, oldLabel);
			});
	};

	useEffect(() => {
		setLabelState(() => props.elementLabel!);
	}, [props.elementId]);

	return (
		<EDEditLabelView
			label={labelState}
			isLabelOnEdit={isLabelOnEditState}
			onEditLabelClick={onEditLabelClick}
			onChangeLabel={onChangeLabel}
			onUpdateLabel={onUpdateLabel}
			onCancelLabelChanges={onCancelLabelChanges}
		/>
	);
};

EDEditLabel.displayName = 'EDEditLabel';
EDEditLabel.defaultProps = {};

export default React.memo(EDEditLabel);
