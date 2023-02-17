import type { Compliance, PolicyLibrary } from '@prisma/client';

export type ISideBarCompliance = Pick<Compliance, 'id' | 'label'> & {
	readonly librariesNames: PolicyLibrary[];
};

export type ISelectedSideBarCompliance = Pick<ISideBarCompliance, 'id' | 'label'>;

export interface ICompliancesState {
	sideBarCompliances: ISideBarCompliance[];
	selectedSideBarCompliance: ISelectedSideBarCompliance | null;
}

export interface ISetSideBarCompliancesPayload {
	sideBarCompliances: ISideBarCompliance[];
}

export interface IAddSideBarCompliancesPayload {
	sideBarCompliance: ISideBarCompliance;
}

export interface IDeleteSideBarCompliancePayload {
	id: string;
}

export interface IEditSideBarComplianceLabelPayload {
	id: string;
	label: string;
}

export interface ISetSelectedSideBarCompliancePayload {
	selectedSideBarCompliance: ISelectedSideBarCompliance;
}
