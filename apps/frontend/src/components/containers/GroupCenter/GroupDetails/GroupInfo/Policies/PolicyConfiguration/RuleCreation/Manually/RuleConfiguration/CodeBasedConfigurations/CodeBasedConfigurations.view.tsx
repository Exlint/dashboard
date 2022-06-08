import React from 'react';
import VSvg from '@/ui/VSvg';
// import { Trans, useTranslation } from 'react-i18next';
import BasedCodeConfigurations from '@/ui/CodeBasedConfigurationsInput';
import classes from './CodeBasedConfigurations.module.scss';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedRuleIndex: number | null;
	readonly selectedFileFormatIndex: number;
	readonly isFileFormatClicked: boolean;
	readonly isEditFileFormat: boolean;
	readonly isBasedCodeConfigurationsClicked: boolean;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onEditFileFormatButton: () => void;
	readonly onFileFormatButton: () => void;
	readonly onSelectedFileFormat: (index: number) => void;
	readonly onClickBasedCodeConfigurations: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
}

const CodeBasedConfigurationsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['inputCodeConfigurations']}>
			<VSvg name="inputCode" className={classes['inputCodeConfigurations__icon']} />
			<span className={classes['inputCodeConfigurations__text']}>Input code-based configurations</span>
			<button
				className={classes['editButton']}
				type="button"
				style={{
					backgroundColor: props.selectedRuleIndex === null ? '#D2D2D2' : '#8197b8',
					borderColor: props.selectedRuleIndex === null ? '#B7B7B7' : '#6b7d98',
				}}
				onClick={props.onClickBasedCodeConfigurations}
			>
				<span className={classes['editButton__text']}>Edit</span>
				<VSvg name="arrowRight" className={classes['editButton__icon']} />
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
						<VSvg className={classes['goBackButton__icon']} name="arrowLeft" />
					</button>
					<div className={classes['innerCodeBasedConfigurations']}>
						<BasedCodeConfigurations
							labelInput={props.policyLabelInput}
							selectedFileFormatIndex={props.selectedFileFormatIndex}
							isFileFormatClicked={props.isFileFormatClicked}
							isEditFileFormat={props.isEditFileFormat}
							inputCode={props.ruleCodeBasedConfigurationsInput}
							onFileFormatButton={props.onFileFormatButton}
							onSelectedFileFormat={props.onSelectedFileFormat}
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
							<VSvg className={classes['button__icon']} name="vIcon" />
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
