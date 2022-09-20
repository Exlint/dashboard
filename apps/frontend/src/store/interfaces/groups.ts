type ILibraryName = 'eslint' | 'depcheck' | 'inflint' | 'prettier' | 'stylelint';

export interface ISideBarGroup {
	readonly id: string;
	readonly label: string;
	readonly librariesNames: ILibraryName[];
}

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
