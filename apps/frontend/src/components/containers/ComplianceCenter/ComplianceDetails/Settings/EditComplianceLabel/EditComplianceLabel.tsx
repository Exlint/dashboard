import React, { useEffect, useState } from 'react';
import type { IAvailableLabelResponseData } from '@exlint.io/common';

import { useDebounce } from '@/hooks/use-debounce';
import { backendApi } from '@/utils/http';

import EditComplianceLabelView from './EditComplianceLabel.view';

interface IProps {
	readonly complianceLabel: string;
	readonly newComplianceLabelInput: string | null;
	readonly onNewComplianceLabelInputChange: (value: string) => void;
}

const EditComplianceLabel: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isNewComplianceLabelValidState, setNewIsComplianceLabelValidState] = useState<boolean>(false);

	const [isNewComplianceLabelAvailableState, setNewIsComplianceLabelAvailableState] = useState<
		boolean | null
	>(null);

	useEffect(() => {
		if (props.newComplianceLabelInput === '' || props.newComplianceLabelInput === null) {
			setNewIsComplianceLabelValidState(() => false);
		}
	}, [props.newComplianceLabelInput]);

	useDebounce(
		() => {
			if (
				props.newComplianceLabelInput === '' ||
				props.newComplianceLabelInput === null ||
				props.newComplianceLabelInput.length > 30
			) {
				setNewIsComplianceLabelValidState(() => false);
			} else if (props.newComplianceLabelInput !== props.complianceLabel) {
				backendApi
					.get<IAvailableLabelResponseData>(
						`/user/compliances/available/${props.newComplianceLabelInput}`,
					)
					.then((response) => {
						setNewIsComplianceLabelValidState(() => response.data.isAvailable);
						setNewIsComplianceLabelAvailableState(() => response.data.isAvailable);
					});
			}
		},
		[props.newComplianceLabelInput],
		400,
	);

	const onNewComplianceLabelInputChange = (value: string) => {
		props.onNewComplianceLabelInputChange(value);
		setNewIsComplianceLabelValidState(() => value === props.complianceLabel);
		setNewIsComplianceLabelAvailableState(() => (value === props.complianceLabel ? true : null));
	};

	return (
		<EditComplianceLabelView
			newComplianceLabelInput={props.newComplianceLabelInput}
			isNewComplianceLabelValid={isNewComplianceLabelValidState}
			isNewComplianceLabelAvailable={isNewComplianceLabelAvailableState}
			onNewComplianceLabelInputChange={onNewComplianceLabelInputChange}
		/>
	);
};

EditComplianceLabel.displayName = 'EditComplianceLabel';
EditComplianceLabel.defaultProps = {};

export default React.memo(EditComplianceLabel);
