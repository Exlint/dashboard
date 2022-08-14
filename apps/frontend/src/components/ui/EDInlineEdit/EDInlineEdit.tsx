import React, { useEffect, useState } from 'react';

import EDInlineEditView from './EDInlineEdit.view';

interface IProps {
	readonly valueFromDB: string;
	readonly maxLength: number;
	readonly onUpdateInput: (newInput: string) => void;
}

const EDInlineEdit: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [inlineTextState, setInlineTextState] = useState<string>('');
	const [isInputOnEditState, setIsInputOnEditState] = useState<boolean>(false);

	const onEditInlineClick = () => setIsInputOnEditState(() => true);

	const onChangeInput = (value: string) => {
		setInlineTextState(() => value);
	};

	const onUpdateInputHandler = () => {
		if (inlineTextState) {
			props.onUpdateInput(inlineTextState);
		}
		setInlineTextState(() => props.valueFromDB);
		setIsInputOnEditState(() => false);
	};

	const onCancelInputChanges = () => {
		setInlineTextState(() => props.valueFromDB);
		setIsInputOnEditState(() => false);
	};

	const onKeyboardPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			onUpdateInputHandler();
		}
	};

	useEffect(() => {
		setInlineTextState(() => props.valueFromDB);
	}, [props.valueFromDB]);

	return (
		<EDInlineEditView
			inlineTextState={inlineTextState}
			isInputOnEdit={isInputOnEditState}
			maxLength={props.maxLength}
			onEditInlineClick={onEditInlineClick}
			onChangeInput={onChangeInput}
			onUpdateInputHandler={onUpdateInputHandler}
			onCancelInputChanges={onCancelInputChanges}
			onKeyboardPress={onKeyboardPress}
		/>
	);
};

EDInlineEdit.displayName = 'EDInlineEdit';
EDInlineEdit.defaultProps = {};

export default React.memo(EDInlineEdit);
