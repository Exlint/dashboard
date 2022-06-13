import React from 'react';
// import { Trans, useTranslation } from 'react-i18next';
import VSvg from '@/ui/VSvg';

import classes from './PolicyConfigurationButton.module.scss';

interface IProps {
	readonly isButtonDisabled: boolean;
	readonly onCreateNewPolicy: () => void;
}

const PolicyConfigurationButtonView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<button
			className={classes['policyConfigurationButton']}
			type="button"
			disabled={props.isButtonDisabled}
			style={{
				backgroundColor: props.isButtonDisabled ? '#E7E7E7' : '#2049b0',
				borderColor: props.isButtonDisabled ? '#BBB8CA' : '#19357e',
			}}
			onClick={props.onCreateNewPolicy}
		>
			<span
				className={classes['policyConfigurationButton__text']}
				style={{ color: props.isButtonDisabled ? '#8B8B8B' : '#e7e7e7' }}
			>
				Continue to Policy Configuration
			</span>
			<VSvg
				className={classes['policyConfigurationButton__icon']}
				name="arrowRight"
				style={{ stroke: props.isButtonDisabled ? '#8B8B8B' : '#e7e7e7' }}
			/>
		</button>
	);
};

PolicyConfigurationButtonView.displayName = 'PolicyConfigurationButtonView';
PolicyConfigurationButtonView.defaultProps = {};

export default React.memo(PolicyConfigurationButtonView);
