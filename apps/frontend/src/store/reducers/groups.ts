import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type {
	IAddSideBarGroupsPayload,
	IDeleteSideBarGroupPayload,
	IEditSideBarGroupLabelPayload,
	IGroupsState,
	ISetSelectedSideBarGroupPayload,
	ISetSideBarGroupsPayload,
} from '../interfaces/groups';

const initialState: IGroupsState = {
	sideBarGroups: [],
	selectedSideBarGroup: null,
};

const groupsSlice = createSlice({
	name: 'groups',
	initialState,
	reducers: {
		setSideBarGroups(state, action: PayloadAction<ISetSideBarGroupsPayload>) {
			state.sideBarGroups = action.payload.sideBarGroups;
		},
		addSideBarGroup(state, action: PayloadAction<IAddSideBarGroupsPayload>) {
			state.sideBarGroups.push(action.payload.sideBarGroup);
		},
		deleteSideBarGroup(state, action: PayloadAction<IDeleteSideBarGroupPayload>) {
			state.sideBarGroups = state.sideBarGroups.filter((group) => group.id !== action.payload.id);
			state.selectedSideBarGroup = null;
		},
		editSideBarGroup(state, action: PayloadAction<IEditSideBarGroupLabelPayload>) {
			const matchingGroup = state.sideBarGroups.find((group) => group.id === action.payload.id);

			if (!matchingGroup) {
				return;
			}

			matchingGroup.label = action.payload.label;
			state.selectedSideBarGroup!.label = action.payload.label;
		},
		setSelectedSideBarGroup(state, action: PayloadAction<ISetSelectedSideBarGroupPayload>) {
			state.selectedSideBarGroup = action.payload.selectedSideBarGroup;
		},
		unsetSelectedSideBarGroup(state) {
			state.selectedSideBarGroup = null;
		},
	},
});

export const groupsActions = groupsSlice.actions;

export default groupsSlice.reducer;
