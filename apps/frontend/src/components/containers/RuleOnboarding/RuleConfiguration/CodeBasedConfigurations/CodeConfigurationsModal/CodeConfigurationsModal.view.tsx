import React from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import EDCodeBasedConfigurationsInput from '@/ui/EDCodeBasedConfigurationsInput';
import EDBackdrop from '@/ui/EDBackdrop';

import classes from './CodeConfigurationsModal.module.scss';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly isEditFileFormat: boolean;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onEditFileFormatButton: () => void;
	readonly onCloseCodeConfigurationsModal: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
}

const CodeConfigurationsModalView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const modalRoot = document.getElementById('overlay-root') as HTMLElement;

	return (
		<>
			<EDBackdrop onBackdropClick={props.onCloseCodeConfigurationsModal} />
			{ReactDOM.createPortal(
				<div className={classes['codeBasedConfigurations']}>
					<button
						className={classes['goBackButton']}
						type="button"
						onClick={props.onCloseCodeConfigurationsModal}
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
						onClick={props.onCloseCodeConfigurationsModal}
					>
						<div className={classes['button']}>
							<span className={classes['button__text']}>
								{t(
									'ruleOnboarding.ruleConfiguration.codeBasedConfigurations.modal.doneButton',
								)}
							</span>
							<EDSvg className={classes['button__icon']} name="vConfirm" />
						</div>
					</button>
				</div>,
				modalRoot,
			)}
		</>
	);
};

CodeConfigurationsModalView.displayName = 'CodeConfigurationsModalView';
CodeConfigurationsModalView.defaultProps = {};

export default React.memo(CodeConfigurationsModalView);
