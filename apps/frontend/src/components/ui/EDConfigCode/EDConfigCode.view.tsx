import React, { type FormEvent } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import CodeMirror from '@uiw/react-codemirror';
import createTheme from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { tags } from '@lezer/highlight';
import { StreamLanguage, LanguageSupport } from '@codemirror/language';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';
import { CodeType } from '@prisma/client';

import EDAcceptButton from '../EDAcceptButton';
import EDSelect from '../EDSelect';
import type { IOption } from './interfaces/option';

import classes from './EDConfigCode.module.scss';

const yamlExtension = new LanguageSupport(StreamLanguage.define(yaml));

interface IProps {
	readonly codeInput: string | null;
	readonly selectedFileTypeIndex: number;
	readonly isSubmitDisabled: boolean;
	readonly selectOptions: IOption[];
	readonly onInputChange: (value: string) => void;
	readonly onSelectedFileTypeSelect: (index: number) => void;
	readonly onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const EDConfigCodeView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
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
		styles: [
			{ tag: [tags.comment, tags.bracket], color: '#6a737d' },
			{ tag: [tags.className, tags.propertyName], color: '#6f42c1' },
			{ tag: [tags.variableName, tags.attributeName, tags.number, tags.operator], color: '#005cc5' },
			{ tag: [tags.keyword, tags.typeName, tags.typeOperator, tags.typeName], color: '#d73a49' },
			{ tag: [tags.string, tags.meta, tags.regexp], color: '#032f62' },
			{ tag: [tags.name, tags.quote], color: '#22863a' },
			{ tag: [tags.heading], color: '#24292e', fontWeight: 'bold' },
			{ tag: [tags.emphasis], color: '#24292e', fontStyle: 'italic' },
			{ tag: [tags.deleted], color: '#b31d28', backgroundColor: '#ffeef0' },
		],
	});

	const selectedFileType = props.selectOptions[props.selectedFileTypeIndex]?.value;

	let chosenExtension = json();

	if (selectedFileType === CodeType.JS) {
		chosenExtension = javascript();
	} else if (selectedFileType === CodeType.YAML) {
		chosenExtension = yamlExtension;
	}

	return (
		<form className={classes['container']} onSubmit={props.onSubmit}>
			<div className={classes['actionContainer']}>
				<span className={classes['actionContainer__instruction']}>
					{t('configCode.fileType')}
					<Trans>&#58;</Trans>
				</span>
				<EDSelect
					wrapperClassName={classes['actionContainer__fileTypeSelect']}
					optionsClassName={classes['actionContainer__fileTypeSelectInnerOptions']}
					className={classes['actionContainer__fileTypeSelectInner']}
					options={props.selectOptions}
					selectedIndex={props.selectedFileTypeIndex}
					onSelect={props.onSelectedFileTypeSelect}
				/>
				<EDAcceptButton type="submit" disabled={props.isSubmitDisabled}>
					{t('configCode.submit')}
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
					autocompletion: false,
				}}
				height="495px"
				extensions={[chosenExtension]}
				onChange={(value) => props.onInputChange(value)}
			/>
		</form>
	);
};

EDConfigCodeView.displayName = 'EDConfigCodeView';
EDConfigCodeView.defaultProps = {};

export default React.memo(EDConfigCodeView);
