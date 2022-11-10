import React, { type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';

import EDAcceptButton from '../EDAcceptButton';

import classes from './EDTextCode.module.scss';

interface IProps {
	readonly codeInput: string | null;
	readonly isSubmitDisabled: boolean;
	readonly onCodeInputChange: (value: string) => void;
	readonly onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const EDTextCodeView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const editorTheme = createTheme({
		theme: 'light',
		settings: {
			background: '#fefefe',
			foreground: '#161616',
			caret: '#161616',
			gutterBackground: '#fefefe',
			gutterBorder: '#e7e7e7',
			gutterForeground: '#161616',
		},
		styles: [],
	});

	return (
		<form className={classes['container']} onSubmit={props.onSubmit}>
			<div className={classes['actionContainer']}>
				<EDAcceptButton disabled={props.isSubmitDisabled} type="submit">
					{t('textCode.submit')}
				</EDAcceptButton>
			</div>

			<CodeMirror
				className={classes['codeContainer']}
				theme={editorTheme}
				value={props.codeInput ?? ''}
				basicSetup={{
					highlightActiveLineGutter: false,
					highlightActiveLine: false,
					searchKeymap: false,
					foldGutter: false,
				}}
				height="495px"
				onChange={(value) => props.onCodeInputChange(value)}
			/>
		</form>
	);
};

EDTextCodeView.displayName = 'EDTextCodeView';
EDTextCodeView.defaultProps = {};

export default React.memo(EDTextCodeView);
