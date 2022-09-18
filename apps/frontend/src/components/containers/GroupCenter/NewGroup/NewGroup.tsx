import React, { type FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDebounce } from '@/hooks/use-debounce';
import { backendApi } from '@/utils/http';

import type { ISideBarGroup } from '../interfaces/group';
import type { IAvailableLabelResponse, ICreateGroupResponse } from './interfaces/response';

import NewGroupView from './NewGroup.view';

interface IProps {
	readonly onAddGroupToSideBar: (group: ISideBarGroup) => void;
}

const NewGroup: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [groupLabelInputState, setGroupLabelInputState] = useState<string | null>(null);
	const [groupDescriptionInputState, setGroupDescriptionInputState] = useState<string | null>(null);
	const [isGroupLabelValidState, setIsGroupLabelValidState] = useState<boolean>(false);
	const [isGroupLabelAvailableState, setIsGroupLabelAvailableState] = useState<boolean | null>(null);

	const navigate = useNavigate();

	useEffect(() => {
		if (groupLabelInputState === '' || groupLabelInputState === null) {
			setIsGroupLabelValidState(() => false);
		}
	}, [groupLabelInputState]);

	useDebounce(
		() => {
			if (groupLabelInputState === '' || groupLabelInputState === null) {
				setIsGroupLabelValidState(() => false);
			} else {
				backendApi
					.get<IAvailableLabelResponse>(`/user/groups/available/${groupLabelInputState}`)
					.then((response) => {
						setIsGroupLabelValidState(response.data.isAvailable);
						setIsGroupLabelAvailableState(response.data.isAvailable);
					});
			}
		},
		[groupLabelInputState],
		400,
	);

	const onGroupLabelInputChange = (value: string) => {
		setGroupLabelInputState(() => value);
		setIsGroupLabelAvailableState(() => null);
		setIsGroupLabelValidState(() => false);
	};

	const onGroupDescriptionInputChange = (value: string) => {
		setGroupDescriptionInputState(() => value);
	};

	const onCreateGroup = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		backendApi
			.post<ICreateGroupResponse>('/user/groups', {
				label: groupLabelInputState,
				description:
					groupDescriptionInputState !== null && groupDescriptionInputState !== ''
						? groupDescriptionInputState
						: null,
			})
			.then((response) => {
				props.onAddGroupToSideBar({
					id: response.data.groupId,
					label: groupLabelInputState,
					librariesNames: [],
				});

				navigate(`/group-center/${response.data.groupId}`);
			});
	};

	return (
		<NewGroupView
			groupLabelInput={groupLabelInputState}
			groupDescriptionInput={groupDescriptionInputState}
			isGroupLabelValid={isGroupLabelValidState}
			isGroupLabelAvailable={isGroupLabelAvailableState}
			onGroupLabelInputChange={onGroupLabelInputChange}
			onGroupDescriptionInputChange={onGroupDescriptionInputChange}
			onCreateGroup={onCreateGroup}
		/>
	);
};

NewGroup.displayName = 'NewGroup';
NewGroup.defaultProps = {};

export default React.memo(NewGroup);
