import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import type { IEditComplianceDescriptionDto, IGetPoliciesResponseData } from '@exlint.io/common';
import type { AxiosResponse } from 'axios';

import type { AppState } from '@/store/app';
import { backendApi } from '@/utils/http';

import type { IPolicy } from './policy';

import PoliciesView from './Policies.view';

interface IPropsFromState {
	readonly complianceId: string;
}

interface IProps extends IPropsFromState {}

const Policies: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [policiesState, setPoliciesState] = useState<IPolicy[]>([]);
	const [descriptionInputState, setDescriptionInputState] = useState<string | null>(null);
	const [originalDescriptionInputState, setOriginalDescriptionInputState] = useState<string | null>(null);
	const [isDescriptionOnEditState, setIsDescriptionOnEditState] = useState<boolean>(false);
	const [totalInlinePoliciesState, setTotalInlinePoliciesState] = useState<number | null>(null);

	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const page = searchParams.get('p');
	const isPageANumber = !isNaN(parseInt(page ?? ''));
	const realPage = isPageANumber ? parseInt(page!) : 1;

	useEffect(() => {
		backendApi
			.get<IGetPoliciesResponseData>(
				`/user/compliances/inline-policies/${props.complianceId}?p=${realPage}`,
			)
			.then((response) => {
				setPoliciesState(() => response.data.inlinePolicies);
				setDescriptionInputState(() => response.data.description);
				setOriginalDescriptionInputState(() => response.data.description);
				setTotalInlinePoliciesState(() => response.data.count);
			});
	}, [backendApi, props.complianceId, page]);

	const descriptionInputChange = (value: string) => setDescriptionInputState(() => value);

	const onEditIconClick = () => setIsDescriptionOnEditState(() => true);

	const onConfirmNewEditClick = () => {
		setIsDescriptionOnEditState(() => false);

		if (descriptionInputState !== originalDescriptionInputState) {
			backendApi
				.patch<void, AxiosResponse<void>, IEditComplianceDescriptionDto>(
					`/user/compliances/description/${props.complianceId}`,
					{
						description: descriptionInputState || null,
					},
				)
				.then(() => {
					setIsDescriptionOnEditState(() => false);
					setOriginalDescriptionInputState(() => descriptionInputState);
				});
		} else {
			setIsDescriptionOnEditState(() => false);
		}
	};

	const onCreateNewPolicy = () => navigate('new');

	return (
		<PoliciesView
			policies={policiesState}
			descriptionInput={descriptionInputState}
			isDescriptionOnEdit={isDescriptionOnEditState}
			totalInlinePolicies={totalInlinePoliciesState ?? 0}
			descriptionInputChange={descriptionInputChange}
			onEditIconClick={onEditIconClick}
			onConfirmNewEditClick={onConfirmNewEditClick}
			onCreateNewPolicy={onCreateNewPolicy}
		/>
	);
};

Policies.displayName = 'Policies';
Policies.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		complianceId: state.compliances.selectedSideBarCompliance!.id,
	};
};

export default connect(mapStateToProps)(React.memo(Policies));
