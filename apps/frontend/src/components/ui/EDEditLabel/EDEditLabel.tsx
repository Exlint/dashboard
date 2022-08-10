import React, { useEffect, useState } from 'react';

import EDEditLabelView from './EDEditLabel.view';

interface IProps {
	readonly id: string;
	readonly label: string;
	readonly onUpdateLabel: () => void;
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
		setLabelState(() => props.label);
		setIsLabelOnEditState(() => false);
	};

	useEffect(() => {
		setLabelState(() => props.label!);
	}, [props.id]);

	return (
		<EDEditLabelView
			label={labelState}
			isLabelOnEdit={isLabelOnEditState}
			onEditLabelClick={onEditLabelClick}
			onChangeLabel={onChangeLabel}
			onUpdateLabel={props.onUpdateLabel}
			onCancelLabelChanges={onCancelLabelChanges}
		/>
	);
};

EDEditLabel.displayName = 'EDEditLabel';
EDEditLabel.defaultProps = {};

export default React.memo(EDEditLabel);
