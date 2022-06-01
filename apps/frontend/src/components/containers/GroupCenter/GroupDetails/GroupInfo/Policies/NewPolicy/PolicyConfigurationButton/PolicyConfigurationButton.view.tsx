import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';
import { ILibrary } from '@/interfaces/library';
import VSvg from '@/ui/VSvg';

import classes from './PolicyConfigurationButton.module.scss';

interface IProps {
	readonly selectedLibrary: ILibrary | null;
	readonly policyLabelInput: string | null;
	readonly onPolicyConfiguratoinClicked: () => void;
}

const PolicyConfigurationButtonView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<button
			className={classes['policyConfigurationButton']}
			type="button"
			style={{
				backgroundColor: !props.selectedLibrary || !props.policyLabelInput ? '#E7E7E7' : '#2049b0',
				borderColor: !props.selectedLibrary || !props.policyLabelInput ? '#BBB8CA' : '#19357e',
			}}
			onClick={props.onPolicyConfiguratoinClicked}
		>
			<span
				className={classes['policyConfigurationButton__text']}
				style={{ color: !props.selectedLibrary || !props.policyLabelInput ? '#8B8B8B' : '#e7e7e7' }}
			>
				Continue to Policy Configuration
			</span>
			<VSvg
				className={classes['policyConfigurationButton__icon']}
				name="arrowRight"
				style={{ stroke: !props.selectedLibrary || !props.policyLabelInput ? '#8B8B8B' : '#e7e7e7' }}
			/>
		</button>
	);
};

PolicyConfigurationButtonView.displayName = 'PolicyConfigurationButtonView';
PolicyConfigurationButtonView.defaultProps = {};

export default React.memo(PolicyConfigurationButtonView);
