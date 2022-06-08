import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { fileFormats } from '@/data/fileFormts';

import classes from './InputCodeForm.module.scss';

interface IProps {
	readonly inputCode: string;
	readonly selectedFileFormatIndex: number;
	readonly isEditFileFormat: boolean;
	readonly onChangeInput: (input: string) => void;
}

const InputCodeFormView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['inputFormCode']}>
			<CodeEditor
				disabled={props.isEditFileFormat ? false : true}
				value={props.inputCode ?? ''}
				language={fileFormats[props.selectedFileFormatIndex]}
				placeholder="Input config here..."
				style={{
					fontSize: 15,
					backgroundColor: '#FEFEFE',
					overflowY: 'auto',
					color: props.inputCode.length > 0 && props.isEditFileFormat ? '#202428' : '#999',
					width: '100%',
					height: '100%',
					fontFamily:
						'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
				}}
				onChange={(value) => props.onChangeInput(value.target.value)}
			/>
		</div>
	);
};

InputCodeFormView.displayName = 'InputCodeFormView';
InputCodeFormView.defaultProps = {};

export default React.memo(InputCodeFormView);
