import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { IAvailableLabelResponseData, IGetComplianceResponseData } from '@exlint.io/common';

import { useDebounce } from '@/hooks/use-debounce';
import BackendService from '@/services/backend';

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
	const [complianceLabelState, setComplianceLabelState] = useState<string | null>(null);

	const params = useParams<{ readonly complianceId: string }>();
	const navigate = useNavigate();

	useEffect(() => {
		if (!params.complianceId) {
			navigate('/not-found');

			return;
		}

		BackendService.get<IGetComplianceResponseData>(`/user/compliances/${params.complianceId}`)
			.then((responseData) => setComplianceLabelState(() => responseData.label))
			.catch(() => navigate('/'));
	}, [params.complianceId]);

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
				BackendService.get<IAvailableLabelResponseData>(
					`/user/inline-policies/available/${props.policyLabel}`,
				).then((responseData) => {
					props.onSetPolicyLabelAvailable(responseData.isAvailable);
					props.onSetPolicyLabelValid(responseData.isAvailable);
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
			selectedComplianceLabel={complianceLabelState}
			policyLabel={props.policyLabel}
			isPolicyLabelAvailable={props.isPolicyLabelAvailable}
			policyDescription={props.policyDescription}
			onPolicyDescriptionChange={props.onPolicyDescriptionChange}
			onPolicyLabelChange={onPolicyLabelChange}
		/>
	);
};

Details.displayName = 'Details';
Details.defaultProps = {};

export default React.memo(Details);
