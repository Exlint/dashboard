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
	const onKeyboardPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			props.onUpdateInput();
		}
	};
	return (
		<EDInlineEditView
			label={props.label}
			isInputOnEdit={props.isInputOnEdit}
			onEditInlineClick={props.onEditInlineClick}
			onChangeInput={props.onChangeInput}
			onUpdateInput={props.onUpdateInput}
			onCancelInputChanges={props.onCancelInputChanges}
			onKeyboardPress={onKeyboardPress}
		/>
	);
};

EDInlineEdit.displayName = 'EDInlineEdit';
EDInlineEdit.defaultProps = {};

export default React.memo(EDInlineEdit);
