import React, { useEffect, useState } from 'react';

import { useDebounce } from '@/hooks/use-debounce';
import { backendApi } from '@/utils/http';
import type { IAvailableLabelResponse } from '@/interfaces/responses';

import EditPolicyLabelView from './EditPolicyLabel.view';

interface IProps {
	readonly policyLabel: string;
	readonly newPolicyLabelInput: string | null;
	readonly onNewPolicyLabelInputChange: (value: string) => void;
}

const EditPolicyLabel: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isNewPolicyLabelValidState, setNewIsPolicyLabelValidState] = useState<boolean>(false);

	const [isNewPolicyLabelAvailableState, setNewIsPolicyLabelAvailableState] = useState<boolean | null>(
		null,
	);

	useEffect(() => {
		if (props.newPolicyLabelInput === '' || props.newPolicyLabelInput === null) {
			setNewIsPolicyLabelValidState(() => false);
		}
	}, [props.newPolicyLabelInput]);

	useDebounce(
		() => {
			if (props.newPolicyLabelInput === '' || props.newPolicyLabelInput === null) {
				setNewIsPolicyLabelValidState(() => false);
			} else if (props.newPolicyLabelInput !== props.policyLabel) {
				backendApi
					.get<IAvailableLabelResponse>(
						`/user/inline-policies/available/${props.newPolicyLabelInput}`,
					)
					.then((response) => {
						setNewIsPolicyLabelValidState(() => response.data.isAvailable);
						setNewIsPolicyLabelAvailableState(() => response.data.isAvailable);
					});
			}
		},
		[props.newPolicyLabelInput],
		400,
	);

	const onNewPolicyInputChange = (value: string) => {
		props.onNewPolicyLabelInputChange(value);
		setNewIsPolicyLabelValidState(() => value === props.policyLabel);
		setNewIsPolicyLabelAvailableState(() => (value === props.policyLabel ? true : null));
	};

	return (
		<EditPolicyLabelView
			newPolicyLabelInput={props.newPolicyLabelInput}
			isNewPolicyLabelValid={isNewPolicyLabelValidState}
			isNewPolicyLabelAvailable={isNewPolicyLabelAvailableState}
			onNewPolicyLabelInputChange={onNewPolicyInputChange}
		/>
	);
};

EditPolicyLabel.displayName = 'EditPolicyLabel';
EditPolicyLabel.defaultProps = {};

export default React.memo(EditPolicyLabel);
