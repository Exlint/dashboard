import React from 'react';

import EDInlineEditView from './EDInlineEdit.view';

interface IProps {
	readonly label: string;
	readonly isInputOnEdit: boolean;
	readonly onEditInlineClick: () => void;
	readonly onChangeInput: (_: string) => void;
	readonly onUpdateInput: () => void;
	readonly onCancelInputChanges: () => void;
}

const EDInlineEdit: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDInlineEditView
			label={props.label}
			isInputOnEdit={props.isInputOnEdit}
			onEditInlineClick={props.onEditInlineClick}
			onChangeInput={props.onChangeInput}
			onUpdateInput={props.onUpdateInput}
			onCancelInputChanges={props.onCancelInputChanges}
		/>
	);
};

EDInlineEdit.displayName = 'EDInlineEdit';
EDInlineEdit.defaultProps = {};

export default React.memo(EDInlineEdit);
