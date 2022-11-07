import React, { type FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { scroller } from 'react-scroll';
import type { IAvailableLabelResponseData, ICreateGroupResponseData } from '@exlint-dashboard/common';

import { useDebounce } from '@/hooks/use-debounce';
import { backendApi } from '@/utils/http';
import { groupsActions } from '@/store/reducers/groups';
import type { IAddSideBarGroupsPayload } from '@/store/interfaces/groups';

import NewGroupView from './NewGroup.view';

interface IPropsFromDispatch {
	readonly addSideBarGroup: (groups: IAddSideBarGroupsPayload) => PayloadAction<IAddSideBarGroupsPayload>;
}

interface IProps extends IPropsFromDispatch {}

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
					.get<IAvailableLabelResponseData>(`/user/groups/available/${groupLabelInputState}`)
					.then((response) => {
						setIsGroupLabelValidState(() => response.data.isAvailable);
						setIsGroupLabelAvailableState(() => response.data.isAvailable);
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
			.post<ICreateGroupResponseData>('/user/groups', {
				label: groupLabelInputState,
				description:
					groupDescriptionInputState !== null && groupDescriptionInputState !== ''
						? groupDescriptionInputState
						: null,
			})
			.then((response) => {
				props.addSideBarGroup({
					sideBarGroup: {
						id: response.data.id,
						label: groupLabelInputState!,
						librariesNames: [],
					},
				});

				scroller.scrollTo('group-list-end', {
					containerId: 'group-list-container',
					smooth: true,
					duration: 500,
				});

				navigate(`/group-center/${response.data.id}`);
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

export default connect(null, {
	addSideBarGroup: groupsActions.addSideBarGroup,
})(React.memo(NewGroup));
