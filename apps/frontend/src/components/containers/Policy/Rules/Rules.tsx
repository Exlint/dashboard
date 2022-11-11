import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import type { AxiosResponse } from 'axios';
import type {
	IGetPolicyRulesResponseData,
	ILibraryData,
	ISetIsFormConfigurationDto,
} from '@exlint-dashboard/common';
import type { PolicyLibrary } from '@prisma/client';

import { backendApi } from '@/utils/http';

import RulesView from './Rules.view';

interface IProps {}

const Rules: React.FC<IProps> = () => {
	const params = useParams<{ readonly policyId: string; readonly groupId: string }>();
	const navigate = useNavigate();
	const [, , library] = useOutletContext<[unknown, unknown, PolicyLibrary | null]>();

	const [isFormConfigurationState, setIsFormConfigurationState] = useState<boolean | null>(null);
	const [descriptionState, setDescriptionState] = useState<string | null>(null);
	const [policyCreationDateState, setPolicyCreationDateState] = useState<number | null>(null);
	const [policyTypesState, setPolicyTypesState] = useState<ILibraryData['types'] | null>(null);

	const [policyCategoriesState, setPolicyCategoriesState] = useState<ILibraryData['categories'] | null>(
		null,
	);

	const onIsSwitchCheckedChange = async (checked: boolean) => {
		setIsFormConfigurationState(() => checked);

		await backendApi
			.patch<void, AxiosResponse<void>, ISetIsFormConfigurationDto>(
				`/user/inline-policies/is-form-configuration/${params.policyId}`,
				{ isFormConfiguration: checked },
			)
			.catch(() => {
				setIsFormConfigurationState(() => !checked);
			});
	};

	const onAddNewRuleClick = () => {
		return;
	};

	useEffect(() => {
		backendApi
			.get<IGetPolicyRulesResponseData>(`/user/inline-policies/rules/${params.policyId}`)
			.then((response) => {
				setIsFormConfigurationState(() => response.data.isFormConfiguration);
				setDescriptionState(() => response.data.description);
				setPolicyCreationDateState(() => response.data.createdAt);
				setPolicyTypesState(() => response.data.types);
				setPolicyCategoriesState(() => response.data.categories);
			})
			.catch(() => navigate(`/group-center/${params.groupId}`));
	}, [backendApi]);

	return (
		<RulesView
			isFormConfiguration={isFormConfigurationState}
			description={descriptionState}
			library={library}
			types={policyTypesState}
			categories={policyCategoriesState}
			policyCreationDate={policyCreationDateState}
			onIsSwitchCheckedChange={onIsSwitchCheckedChange}
			onAddNewRuleClick={onAddNewRuleClick}
		/>
	);
};

Rules.displayName = 'Rules';
Rules.defaultProps = {};

export default React.memo(Rules);
