import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { IAvailableLabelResponseData, IGetGroupResponseData } from '@exlint.io/common';

import { backendApi } from '@/utils/http';
import { useDebounce } from '@/hooks/use-debounce';

import DetailsView from './Details.view';

interface IProps {
	readonly policyLabel: string | null;
	readonly policyDescription: string | null;
	readonly isPolicyLabelAvailable: boolean | null;
	readonly onPolicyLabelChange: (value: string) => void;
	readonly onPolicyDescriptionChange: (value: string) => void;
	readonly onSetPolicyLabelValid: (value: boolean) => void;
	readonly onSetPolicyLabelAvailable: (value: boolean | null) => void;
}

const Details: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [groupLabelState, setGroupLabelState] = useState<string | null>(null);

	const params = useParams<{ readonly groupId: string }>();
	const navigate = useNavigate();

	useEffect(() => {
		if (!params.groupId) {
			navigate('/not-found');

			return;
		}

		backendApi
			.get<IGetGroupResponseData>(`/user/groups/${params.groupId}`)
			.then((response) => setGroupLabelState(() => response.data.label))
			.catch(() => navigate('/'));
	}, [params.groupId, backendApi]);

	useEffect(() => {
		if (props.policyLabel === '' || props.policyLabel === null || props.policyLabel.length > 30) {
			props.onSetPolicyLabelValid(false);
		}
	}, [props.policyLabel]);

	useDebounce(
		() => {
			if (props.policyLabel === '' || props.policyLabel === null || props.policyLabel.length > 30) {
				props.onSetPolicyLabelValid(false);
			} else {
				backendApi
					.get<IAvailableLabelResponseData>(`/user/inline-policies/available/${props.policyLabel}`)
					.then((response) => {
						props.onSetPolicyLabelAvailable(response.data.isAvailable);
						props.onSetPolicyLabelValid(response.data.isAvailable);
					});
			}
		},
		[props.policyLabel],
		400,
	);

	const onPolicyLabelChange = (value: string) => {
		props.onPolicyLabelChange(value);
		props.onSetPolicyLabelValid(false);
		props.onSetPolicyLabelAvailable(null);
	};

	return (
		<DetailsView
			selectedGroupLabel={groupLabelState}
			policyLabel={props.policyLabel}
			isPolicyLabelAvailable={props.isPolicyLabelAvailable}
			policyDescritpion={props.policyDescription}
			onPolicyDescriptionChange={props.onPolicyDescriptionChange}
			onPolicyLabelChange={onPolicyLabelChange}
		/>
	);
};

Details.displayName = 'Details';
Details.defaultProps = {};

export default React.memo(Details);
