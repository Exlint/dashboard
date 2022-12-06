import type { ILibraryData } from '@exlint-dashboard/common';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

import EDAcceptButton from '@/ui/EDAcceptButton';
import EDBooleanButton from '@/ui/EDBooleanButton';

import classes from './Form.module.scss';

interface IProps {
	readonly formSchema: ILibraryData['configuration'] | null;
	readonly formConfiguration: Record<string, unknown>;
	readonly isSubmitDisabled: boolean;
	readonly isSwitchChecked: boolean | null;
	readonly onIsSwitchCheckedChange: (checked: boolean) => void;
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

			{props.formSchema && (
				<Form
					className={classes['configurationContainer']}
					schema={props.formSchema}
					validator={validator}
				/>
			)}
		</form>
	);
};

FormView.displayName = 'FormView';
FormView.defaultProps = {};

export default React.memo(FormView);
