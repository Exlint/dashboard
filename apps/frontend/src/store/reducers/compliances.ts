import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type {
	IAddSideBarCompliancesPayload,
	IDeleteSideBarCompliancePayload,
	IEditSideBarComplianceLabelPayload,
	ICompliancesState,
	ISetSelectedSideBarCompliancePayload,
	ISetSideBarCompliancesPayload,
} from '../interfaces/compliances';

const initialState: ICompliancesState = {
	sideBarCompliances: [],
	selectedSideBarCompliance: null,
};

const compliancesSlice = createSlice({
	name: 'compliances',
	initialState,
	reducers: {
		setSideBarCompliances(state, action: PayloadAction<ISetSideBarCompliancesPayload>) {
			state.sideBarCompliances = action.payload.sideBarCompliances;
		},
		addSideBarCompliance(state, action: PayloadAction<IAddSideBarCompliancesPayload>) {
			state.sideBarCompliances.push(action.payload.sideBarCompliance);
		},
		deleteSideBarCompliance(state, action: PayloadAction<IDeleteSideBarCompliancePayload>) {
			state.sideBarCompliances = state.sideBarCompliances.filter(
				(compliance) => compliance.id !== action.payload.id,
			);
			state.selectedSideBarCompliance = null;
		},
		editSideBarCompliance(state, action: PayloadAction<IEditSideBarComplianceLabelPayload>) {
			const matchingCompliance = state.sideBarCompliances.find(
				(compliance) => compliance.id === action.payload.id,
			);

			if (!matchingCompliance) {
				return;
			}

			matchingCompliance.label = action.payload.label;
			state.selectedSideBarCompliance!.label = action.payload.label;
		},
		setSelectedSideBarCompliance(state, action: PayloadAction<ISetSelectedSideBarCompliancePayload>) {
			state.selectedSideBarCompliance = action.payload.selectedSideBarCompliance;
		},
		unsetSelectedSideBarCompliance(state) {
			state.selectedSideBarCompliance = null;
		},
	},
});

export const compliancesActions = compliancesSlice.actions;

export default compliancesSlice.reducer;
