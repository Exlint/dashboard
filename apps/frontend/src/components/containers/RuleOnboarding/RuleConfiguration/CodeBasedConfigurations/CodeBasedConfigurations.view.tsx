import React from 'react';

import EDSvg from '@/ui/EDSvg';
import type { IRule } from '@/interfaces/rule';

import EDCodeBasedConfigurationsInput from '@/ui/EDCodeBasedConfigurationsInput';
import classes from './CodeBasedConfigurations.module.scss';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedRule: IRule | null;
	readonly isEditFileFormat: boolean;
	readonly isBasedCodeConfigurationsClicked: boolean;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onEditFileFormatButton: () => void;
	readonly onClickBasedCodeConfigurations: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
}

const CodeBasedConfigurationsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['inputCodeConfigurations']}>
			<EDSvg name="inputCode" className={classes['inputCodeConfigurations__icon']} />
			<span className={classes['inputCodeConfigurations__text']}>Input code-based configurations</span>
			<button
				className={classes['editButton']}
				type="button"
				style={{
					backgroundColor: props.selectedRule === null ? '#D2D2D2' : '#8197b8',
					borderColor: props.selectedRule === null ? '#B7B7B7' : '#6b7d98',
				}}
				onClick={props.onClickBasedCodeConfigurations}
			>
				<span className={classes['editButton__text']}>Edit</span>
				<EDSvg name="arrowRight" className={classes['editButton__icon']} />
			</button>
			<span
				className={classes['disabled']}
				style={{ display: props.isBasedCodeConfigurationsClicked ? 'flex' : 'none' }}
			/>
			{props.isBasedCodeConfigurationsClicked && (
				<div className={classes['codeBasedConfigurations']}>
					<button
						className={classes['goBackButton']}
						type="button"
						onClick={props.onClickBasedCodeConfigurations}
					>
						<EDSvg className={classes['goBackButton__icon']} name="arrowLeft" />
					</button>
					<div className={classes['innerCodeBasedConfigurations']}>
						<EDCodeBasedConfigurationsInput
							configurationType="Rule"
							labelInput={props.policyLabelInput}
							isEditFileFormat={props.isEditFileFormat}
							inputCode={props.ruleCodeBasedConfigurationsInput}
							onEditFileFormatButton={props.onEditFileFormatButton}
							onChangeInput={props.onCodeBasedConfigurationsInputChanged}
						/>
					</div>
					<button
						className={classes['doneButtonContainer']}
						type="button"
						onClick={props.onClickBasedCodeConfigurations}
					>
						<div className={classes['button']}>
							<span className={classes['button__text']}>Done</span>
							<EDSvg className={classes['button__icon']} name="vConfirm" />
						</div>
					</button>
				</div>
			)}
		</div>
	);
};

CodeBasedConfigurationsView.displayName = 'CodeBasedConfigurationsView';
CodeBasedConfigurationsView.defaultProps = {};

export default React.memo(CodeBasedConfigurationsView);
