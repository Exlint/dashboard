import type { Group, PolicyLibrary } from '@prisma/client';

export type ISideBarGroup = Pick<Group, 'id' | 'label'> & { readonly librariesNames: PolicyLibrary[] };

export type ISelectedSideBarGroup = Pick<ISideBarGroup, 'id' | 'label'>;

export interface IGroupsState {
	sideBarGroups: ISideBarGroup[];
	selectedSideBarGroup: ISelectedSideBarGroup | null;
}

export interface ISetSideBarGroupsPayload {
	sideBarGroups: ISideBarGroup[];
}

export interface IAddSideBarGroupsPayload {
	sideBarGroup: ISideBarGroup;
}

export interface IDeleteSideBarGroupPayload {
	id: string;
}

export interface IEditSideBarGroupLabelPayload {
	id: string;
	label: string;
}

export interface ISetSelectedSideBarGroupPayload {
	selectedSideBarGroup: ISelectedSideBarGroup;
}
