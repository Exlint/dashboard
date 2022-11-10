import type { ILibraryData } from '@exlint-dashboard/common';
import React from 'react';
import { useTranslation } from 'react-i18next';

import EDAcceptButton from '@/ui/EDAcceptButton';
import EDBooleanButton from '@/ui/EDBooleanButton';
import EDConfigurationsInputs from '@/ui/EDConfigurationsInputs';

import classes from './Form.module.scss';

interface IProps {
	readonly formSchema: ILibraryData['configuration'] | null;
	readonly formConfiguration: Record<string, unknown>;
	readonly isSubmitDisabled: boolean;
	readonly isSwitchChecked: boolean | null;
	readonly onIsSwitchCheckedChange: (checked: boolean) => void;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const FormView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<form className={classes['container']}>
			<div className={classes['actionContainer']}>
				<EDBooleanButton
					className={classes['switch']}
					checked={props.isSwitchChecked}
					onChange={props.onIsSwitchCheckedChange}
				/>

				<EDAcceptButton type="submit" disabled={props.isSubmitDisabled}>
					{t('formConfiguration.submit')}
				</EDAcceptButton>
			</div>

			<div>&nbsp;</div>
			{props.formSchema ? (
				<EDConfigurationsInputs
					formSchema={props.formSchema}
					onChangeFormConfiguration={props.onChangeFormConfiguration}
				/>
			) : null}
		</form>
	);
};

FormView.displayName = 'FormView';
FormView.defaultProps = {};

export default React.memo(FormView);
