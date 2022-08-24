import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import type { IRule } from '@/interfaces/rule';

import classes from './CodeBasedConfigurations.module.scss';
import CodeConfigurationsModal from './CodeConfigurationsModal';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedRule: IRule | null;
	readonly isEditFileFormat: boolean;
	readonly isBasedCodeConfigurationsClicked: boolean;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly onEditFileFormatButton: () => void;
	readonly onOpenCodeConfigurationsModal: () => void;
	readonly onCloseCodeConfigurationsModal: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
}

const CodeBasedConfigurationsView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['inputCodeConfigurations']}>
			<EDSvg name="inputCode" className={classes['inputCodeConfigurations__icon']} />
			<span className={classes['inputCodeConfigurations__text']}>
				{t('ruleOnboarding.ruleConfiguration.codeBasedConfigurations.inputTitle')}
			</span>
			<button
				className={classes['editButton']}
				type="button"
				style={{
					backgroundColor: props.selectedRule === null ? '#D2D2D2' : '#8197b8',
					borderColor: props.selectedRule === null ? '#B7B7B7' : '#6b7d98',
				}}
				onClick={props.onOpenCodeConfigurationsModal}
			>
				<span className={classes['editButton__text']}>
					{t('ruleOnboarding.ruleConfiguration.codeBasedConfigurations.edit')}
				</span>
				<EDSvg name="arrowRight" className={classes['editButton__icon']} />
			</button>

			{props.isBasedCodeConfigurationsClicked && (
				<CodeConfigurationsModal
					policyLabelInput={props.policyLabelInput}
					isEditFileFormat={props.isEditFileFormat}
					ruleCodeBasedConfigurationsInput={props.ruleCodeBasedConfigurationsInput}
					onEditFileFormatButton={props.onEditFileFormatButton}
					onCloseCodeConfigurationsModal={props.onCloseCodeConfigurationsModal}
					onCodeBasedConfigurationsInputChanged={props.onCodeBasedConfigurationsInputChanged}
				/>
			)}
		</div>
	);
};

CodeBasedConfigurationsView.displayName = 'CodeBasedConfigurationsView';
CodeBasedConfigurationsView.defaultProps = {};

export default React.memo(CodeBasedConfigurationsView);
