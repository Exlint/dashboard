import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import CodeBasedConfigurationInput from '@/ui/CodeBasedConfigurationsInput';
import NavigateBackButton from '@/ui/NavigateBackButton';
import PolicySidebar from './PolicySidebar';

import classes from './PolicyConfiguration.module.scss';

interface IProps {
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly isEditFileFormat: boolean;
	readonly onUpdatePolicyConfiguration: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
	readonly onEditFileFormatButton: () => void;
}

const PolicyConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<section className={classes['policyConfiguration']}>
			<PolicySidebar />
			<div className={classes['policyConfigurationContainer']}>
				<div className={classes['innerButtons']}>
					<NavigateBackButton position={{ bottom: '0px', right: ' 0px' }} />

					<Link to="/groupCenter/group/Policy/ruleOnboarding">
						<button
							className={classes['ruleCreationButton']}
							type="button"
							role="button"
							onClick={props.onUpdatePolicyConfiguration}
						>
							<span className={classes['ruleCreationButton__text']}>
								{t('policyConfiguration.saveAndUpdateButton')}
							</span>
							<EDSvg className={classes['ruleCreationButton__icon']} name="v" />
						</button>
					</Link>
				</div>
				<div className={classes['innerCodeBasedInput']}>
					<CodeBasedConfigurationInput
						configurationType="Policy"
						labelInput="temp label"
						inputCode={props.ruleCodeBasedConfigurationsInput}
						isEditFileFormat={props.isEditFileFormat}
						onChangeInput={props.onCodeBasedConfigurationsInputChanged}
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
