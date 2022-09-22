import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import type { AppState } from '@/store/app';
import { backendApi } from '@/utils/http';

import type { IGetPolicies, IPolicy } from './interfaces/policy';

import PoliciesView from './Policies.view';

interface IPropsFromState {
	readonly groupId: string;
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
			.get<IGetPolicies>(`/user/groups/inline-policies/${props.groupId}?p=${realPage}`)
			.then((response) => {
				setPoliciesState(() => response.data.inlinePolicies);
				setDescriptionInputState(() => response.data.description);
				setOriginalDescriptionInputState(() => response.data.description);
				setTotalInlinePoliciesState(() => response.data.count);
			});
	}, [backendApi, props.groupId, page]);

	const descriptionInputChange = (value: string) => setDescriptionInputState(() => value);

	const onEditIconClick = () => setIsDescriptionOnEditState(() => true);

	const onConfirmNewEditClick = () => {
		setIsDescriptionOnEditState(() => false);

		if (descriptionInputState !== originalDescriptionInputState) {
			backendApi
				.patch(`/user/groups/description/${props.groupId}`, {
					description: descriptionInputState || null,
				})
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
		groupId: state.groups.selectedSideBarGroup!.id,
	};
};

export default connect(mapStateToProps)(React.memo(Policies));
