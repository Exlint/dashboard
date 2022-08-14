import React, { useEffect, useState } from 'react';

import { backendApi } from '@/utils/http';
import EDInlineEditView from './EDInlineEdit.view';

interface IProps {
	readonly key: string;
	readonly id: string;
	readonly apiPath: string;
	readonly valueFromDB: string;
	readonly maxInputDigits: number;
	readonly onUpdateVisualUI: (id: string, newValue: string) => void;
}

const EDInlineEdit: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [initialValueState, setInitialValueState] = useState<string>('');
	const [isInputOnEditState, setIsInputOnEditState] = useState<boolean>(false);

	const onEditInlineClick = () => setIsInputOnEditState(() => true);

	const onChangeInput = (value: string) => {
		setInitialValueState(() => value);
	};

	const onUpdateInput = () => {
		const oldLabel = initialValueState;
		let newLabel = initialValueState;

		if (initialValueState === '') {
			newLabel = props.valueFromDB;
			setInitialValueState(() => props.valueFromDB);
		}

		props.onUpdateVisualUI(props.id, newLabel);
		setIsInputOnEditState(() => false);

		backendApi
			.patch(props.apiPath, {
				label: newLabel,
			})
			.then(() => {})
			.catch(() => {
				props.onUpdateVisualUI(props.id, oldLabel);
			});
	};

	const onCancelInputChanges = () => {
		setInitialValueState(() => props.valueFromDB);
		setIsInputOnEditState(() => false);
	};

	const onKeyboardPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			onUpdateInput();
		}
	};

	useEffect(() => {
		setInitialValueState(() => props.valueFromDB);
	}, [props.valueFromDB]);

	return (
		<EDInlineEditView
			key={props.key}
			initialValue={initialValueState}
			isInputOnEdit={isInputOnEditState}
			maxInputDigits={props.maxInputDigits}
			onEditInlineClick={onEditInlineClick}
			onChangeInput={onChangeInput}
			onUpdateInput={onUpdateInput}
			onCancelInputChanges={onCancelInputChanges}
			onKeyboardPress={onKeyboardPress}
		/>
	);
};

EDInlineEdit.displayName = 'EDInlineEdit';
EDInlineEdit.defaultProps = {};

export default React.memo(EDInlineEdit);
