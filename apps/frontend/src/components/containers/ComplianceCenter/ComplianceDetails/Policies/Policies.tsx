import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import type { IEditComplianceDescriptionDto, IGetPoliciesResponseData } from '@exlint.io/common';
import type { AxiosResponse } from 'axios';

import { backendApi } from '@/utils/http';
import useBackend from '@/hooks/use-backend';

import PoliciesView from './Policies.view';

interface IProps {}

const Policies: React.FC<IProps> = () => {
	const [descriptionInputState, setDescriptionInputState] = useState<string | null>(null);
	const [isDescriptionOnEditState, setIsDescriptionOnEditState] = useState<boolean>(false);

	const params = useParams<{ readonly complianceId: string }>();
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();
	const page = searchParams.get('p');
	const isPageANumber = !isNaN(parseInt(page ?? ''));
	const realPage = isPageANumber ? parseInt(page!) : 1;

	const { data: getPoliciesResponseData, mutate: getPoliciesMutate } = useBackend<IGetPoliciesResponseData>(
		params.complianceId ? `/user/compliances/inline-policies/${params.complianceId}?p=${realPage}` : null,
	);

	const policies = getPoliciesResponseData?.inlinePolicies ?? [];
	const complianceDescription = getPoliciesResponseData?.description ?? null;
	const totalInlinePolicies = getPoliciesResponseData?.count ?? 0;

	useEffect(() => {
		if (getPoliciesResponseData) {
			setDescriptionInputState(() => getPoliciesResponseData.description);
		}
	}, [getPoliciesResponseData]);

	const descriptionInputChange = (value: string) => setDescriptionInputState(() => value);

	const onEditIconClick = () => setIsDescriptionOnEditState(() => true);

	const onConfirmNewEditClick = () => {
		setIsDescriptionOnEditState(() => false);

		if (descriptionInputState !== complianceDescription) {
			getPoliciesMutate(async (currentData) => {
				if (!currentData) {
					return;
				}

				await backendApi.patch<void, AxiosResponse<void>, IEditComplianceDescriptionDto>(
					`/user/compliances/description/${params.complianceId}`,
					{
						description: descriptionInputState || null,
					},
				);

				return {
					...currentData,
					description: descriptionInputState || null,
				};
			});
		}
	};

	const onCreateNewPolicy = () => navigate('new');

	return (
		<PoliciesView
			policies={policies}
			descriptionInput={descriptionInputState}
			isDescriptionOnEdit={isDescriptionOnEditState}
			totalInlinePolicies={totalInlinePolicies}
			descriptionInputChange={descriptionInputChange}
			onEditIconClick={onEditIconClick}
			onConfirmNewEditClick={onConfirmNewEditClick}
			onCreateNewPolicy={onCreateNewPolicy}
		/>
	);
};

Policies.displayName = 'Policies';
Policies.defaultProps = {};

export default React.memo(Policies);
