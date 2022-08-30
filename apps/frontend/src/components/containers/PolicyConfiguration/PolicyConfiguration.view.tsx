import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import EDCodeBasedConfigurationInput from '@/ui/EDCodeBasedConfigurationsInput';
import EDNavigateBackButton from '@/ui/EDNavigateBackButton';
import PolicySidebar from '@/layout/PolicySidebar';

import type { IPolicySidebar } from '@/interfaces/policy-sidebar';

import classes from './PolicyConfiguration.module.scss';

interface IProps {
	readonly currentPage: string | null;
	readonly selectedPolicy: IPolicySidebar | null;
	readonly ruleCodeBasedConfigurationsInput: string;
	readonly isEditFileFormat: boolean;
	readonly onUpdatePolicyConfiguration: () => void;
	readonly onCodeBasedConfigurationsInputChanged: (input: string) => void;
	readonly onEditFileFormatButton: () => void;
	readonly onSaveConfiguration: () => void;
}

const PolicyConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<PolicySidebar
				name={props.selectedPolicy?.libraryName ?? ''}
				groupLabel={props.selectedPolicy?.groupLabel ?? ''}
				policyLabel={props.selectedPolicy?.policyLabel ?? ''}
				createdAt="11 jun"
			/>
			<main className={classes['policyConfigurationContainer']}>
				<div className={classes['innerButtons']}>
					<EDNavigateBackButton />
					{props.currentPage ? (
						<button
							className={classes['ruleCreationButton']}
							type="button"
							onClick={props.onSaveConfiguration}
						>
							<span className={classes['ruleCreationButton__text']}>
								{t('policyConfiguration.saveConfiguration')}
							</span>
							<EDSvg className={classes['ruleCreationButton__icon']} name="confirmV" />
						</button>
					) : (
						<button
							className={classes['ruleCreationButton']}
							type="button"
							onClick={props.onUpdatePolicyConfiguration}
						>
							<span className={classes['ruleCreationButton__text']}>
								{t('policyConfiguration.saveAndUpdateButton')}
							</span>
							<EDSvg className={classes['ruleCreationButton__icon']} name="confirmV" />
						</button>
					)}
				</div>

				<EDCodeBasedConfigurationInput
					configurationType="Policy"
					labelInput="temp label"
					inputCode={props.ruleCodeBasedConfigurationsInput}
					isEditFileFormat={props.isEditFileFormat}
					onChangeInput={props.onCodeBasedConfigurationsInputChanged}
					onEditFileFormatButton={props.onEditFileFormatButton}
				/>
			</main>
		</div>
	);
};

PolicyConfiguration.displayName = 'PolicyConfiguration';
PolicyConfiguration.defaultProps = {};

export default React.memo(PolicyConfiguration);
