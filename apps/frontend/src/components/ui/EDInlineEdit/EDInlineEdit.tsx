import React from 'react';

import EDInlineEditView from './EDInlineEdit.view';

interface IProps {
	readonly label: string;
	readonly isLabelOnEdit: boolean;
	readonly onEditLabelClick: () => void;
	readonly onChangeLabel: (_: string) => void;
	readonly onUpdateLabel: () => void;
	readonly onCancelLabelChanges: () => void;
}

const EDInlineEdit: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDInlineEditView
			label={props.label}
			isLabelOnEdit={props.isLabelOnEdit}
			onEditLabelClick={props.onEditLabelClick}
			onChangeLabel={props.onChangeLabel}
			onUpdateLabel={props.onUpdateLabel}
			onCancelLabelChanges={props.onCancelLabelChanges}
		/>
	);
};

EDInlineEdit.displayName = 'EDInlineEdit';
EDInlineEdit.defaultProps = {};

export default React.memo(EDInlineEdit);
