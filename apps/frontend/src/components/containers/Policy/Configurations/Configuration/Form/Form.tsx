import type {
	IGetFormSchemaResponseData,
	ILibraryData,
	ISetIsFormConfigurationDto,
} from '@exlint-dashboard/common';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { AxiosResponse } from 'axios';

import { backendApi } from '@/utils/http';

import FormView from './Form.view';

interface IProps {}

const Form: React.FC<IProps> = () => {
	const params = useParams<{ readonly policyId: string; readonly groupId: string }>();
	const navigate = useNavigate();

	const [formSchemaState, setFormSchemaState] = useState<ILibraryData['configuration'] | null>(null);
	const [formConfigurationState] = useState<Record<string, unknown>>({});
	const [isSubmitDisabledState] = useState<boolean>(true);
	const [isSwitchCheckedState, setIsSwitchCheckedState] = useState<boolean | null>(null);

	const onIsSwitchCheckedChange = async (checked: boolean) => {
		setIsSwitchCheckedState(() => checked);

		await backendApi
			.patch<void, AxiosResponse<void>, ISetIsFormConfigurationDto>(
				`/user/inline-policies/is-form-configuration/${params.policyId}`,
				{ isFormConfiguration: checked },
			)
			.catch(() => {
				setIsSwitchCheckedState(() => !checked);
			});
	};

	useEffect(() => {
		backendApi
			.get<IGetFormSchemaResponseData>(`/user/inline-policies/form-schema/${params.policyId}`)
			.then((response) => {
				setFormSchemaState(() => response.data.schema);
				setIsSwitchCheckedState(() => response.data.isFormConfiguration);
			})
			.catch(() => navigate(`/group-center/${params.groupId}`));
	}, [backendApi]);

	return (
		<FormView
			formSchema={formSchemaState}
			formConfiguration={formConfigurationState}
			isSubmitDisabled={isSubmitDisabledState}
			isSwitchChecked={isSwitchCheckedState}
			onIsSwitchCheckedChange={onIsSwitchCheckedChange}
		/>
	);
};

Form.displayName = 'Form';
Form.defaultProps = {};

export default React.memo(Form);
