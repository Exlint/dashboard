import React from 'react';

import EDEditLabelView from './EDEditLabel.view';

interface IProps {
	readonly label: string;
	readonly isLabelOnEdit: boolean;
	readonly onEditLabelClick: (_: boolean) => void;
	readonly onChangeLabel: (_: string) => void;
	readonly onUpdateLabel: () => void;
	readonly onCancelLabelChanges: () => void;
}

const EDEditLabel: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDEditLabelView
			label={props.label}
			isLabelOnEdit={props.isLabelOnEdit}
			onEditLabelClick={props.onEditLabelClick}
			onChangeLabel={props.onChangeLabel}
			onUpdateLabel={props.onUpdateLabel}
			onCancelLabelChanges={props.onCancelLabelChanges}
		/>
	);
};

EDEditLabel.displayName = 'EDEditLabel';
EDEditLabel.defaultProps = {};

export default React.memo(EDEditLabel);
