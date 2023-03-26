/* eslint-disable react/jsx-no-useless-fragment */
import type { ILibraryData } from '@exlint.io/common';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Form, { type IChangeEvent } from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import type { Prisma } from '@prisma/client';

import EDAcceptButton from '@/ui/EDAcceptButton';
import EDBooleanButton from '@/ui/EDBooleanButton';

import classes from './Form.module.scss';

interface IProps {
	readonly formSchema: ILibraryData['configuration'] | null;
	readonly formConfiguration: Prisma.JsonValue;
	readonly isSwitchChecked: boolean | null;
	readonly isFormValid: boolean;
	readonly onIsSwitchCheckedChange: (checked: boolean) => void;
	readonly onFormChange: (data: IChangeEvent) => void;
	readonly onFormSubmit: () => Promise<void>;
}

const FormView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['container']}>
			<div className={classes['actionContainer']}>
				<EDBooleanButton
					className={classes['switch']}
					checked={props.isSwitchChecked}
					onChange={props.onIsSwitchCheckedChange}
				/>

				<EDAcceptButton type="button" disabled={!props.isFormValid} onClick={props.onFormSubmit}>
					{t('formConfiguration.submit')}
				</EDAcceptButton>
			</div>

			{props.formSchema && (
				<Form
					className={classes['configurationContainer']}
					schema={props.formSchema}
					validator={validator}
					formData={props.formConfiguration}
					onChange={props.onFormChange}
				>
					<></>
				</Form>
			)}
		</div>
	);
};

FormView.displayName = 'FormView';
FormView.defaultProps = {};

export default React.memo(FormView);
