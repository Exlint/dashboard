import React, { useEffect, useState } from 'react';

import { useDebounce } from '@/hooks/use-debounce';
import { backendApi } from '@/utils/http';
import type { IAvailableLabelResponse } from '@/interfaces/responses';

import EditGroupLabelView from './EditGroupLabel.view';

interface IProps {
	readonly groupLabel: string;
	readonly newGroupLabelInput: string | null;
	readonly onNewGroupLabelInputChange: (value: string) => void;
}

const EditGroupLabel: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isNewGroupLabelValidState, setNewIsGroupLabelValidState] = useState<boolean>(false);
	const [isNewGroupLabelAvailableState, setNewIsGroupLabelAvailableState] = useState<boolean | null>(null);

	useEffect(() => {
		if (props.newGroupLabelInput === '' || props.newGroupLabelInput === null) {
			setNewIsGroupLabelValidState(() => false);
		}
	}, [props.newGroupLabelInput]);

	useDebounce(
		() => {
			if (props.newGroupLabelInput === '' || props.newGroupLabelInput === null) {
				setNewIsGroupLabelValidState(() => false);
			} else if (props.newGroupLabelInput !== props.groupLabel) {
				backendApi
					.get<IAvailableLabelResponse>(`/user/groups/available/${props.newGroupLabelInput}`)
					.then((response) => {
						setNewIsGroupLabelValidState(() => response.data.isAvailable);
						setNewIsGroupLabelAvailableState(() => response.data.isAvailable);
					});
			}
		},
		[props.newGroupLabelInput],
		400,
	);

	const onNewGroupLabelInputChange = (value: string) => {
		props.onNewGroupLabelInputChange(value);
		setNewIsGroupLabelValidState(() => value === props.groupLabel);
		setNewIsGroupLabelAvailableState(() => (value === props.groupLabel ? true : null));
	};

	return (
		<EditGroupLabelView
			newGroupLabelInput={props.newGroupLabelInput}
			isNewGroupLabelValid={isNewGroupLabelValidState}
			isNewGroupLabelAvailable={isNewGroupLabelAvailableState}
			onNewGroupLabelInputChange={onNewGroupLabelInputChange}
		/>
	);
};

EditGroupLabel.displayName = 'EditGroupLabel';
EditGroupLabel.defaultProps = {};

export default React.memo(EditGroupLabel);
