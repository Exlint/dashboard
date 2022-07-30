import React from 'react';
import { Link } from 'react-router-dom';

import EDSvg from '@/ui/EDSvg';
import CodeBasedConfigurationInput from '@/ui/CodeBasedConfigurationsInput';
import NavigateBackButton from '@/ui/NavigateBackButton';
import PolicySidebar from './PolicySidebar';

import classes from './PolicyConfiguration.module.scss';

interface IProps {
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly selectedFileFormatIndex: number;
	readonly isFileFormatClicked: boolean;
	readonly isEditFileFormat: boolean;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
	readonly onEditFileFormatButton: () => void;
	readonly onFileFormatButton: () => void;
	readonly onSelectedFileFormat: (index: number) => void;
}

const PolicyConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['policyConfiguration']}>
			<PolicySidebar />
			<div className={classes['policyConfigurationContainer']}>
				<div className={classes['innerButtons']}>
					<NavigateBackButton position={{ bottom: '0px', right: ' 0px' }} />

					<Link to="/groupCenter/group/Policy/ruleOnboarding">
						<button className={classes['ruleCreationButton']} type="button">
							<span className={classes['ruleCreationButton__text']}>
								Continue to Rule Creation
							</span>
							<EDSvg className={classes['ruleCreationButton__icon']} name="v" />
						</button>
					</Link>
				</div>
				<div className={classes['innerCodeBasedInput']}>
					<CodeBasedConfigurationInput
						labelInput="temp label"
						inputCode={props.ruleCodeBasedConfigurationsInput}
						selectedFileFormatIndex={props.selectedFileFormatIndex}
						isFileFormatClicked={props.isFileFormatClicked}
						isEditFileFormat={props.isEditFileFormat}
						onChangeInput={props.onCodeBasedConfigurationsInputChanged}
						onFileFormatButton={props.onFileFormatButton}
						onSelectedFileFormat={props.onSelectedFileFormat}
						onEditFileFormatButton={props.onEditFileFormatButton}
					/>
				</div>
			</div>
		</section>
	);
};

PolicyConfiguration.displayName = 'PolicyConfiguration';
PolicyConfiguration.defaultProps = {};

export default React.memo(PolicyConfiguration);
