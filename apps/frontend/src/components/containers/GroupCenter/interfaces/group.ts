import type { ILibraryName } from '@/interfaces/libraries';

export interface ISideBarGroup {
	readonly id: string;
	readonly label: string | null;
	readonly librariesNames: ILibraryName[];
}

export interface IGetAllGroupsResponse {
	readonly groups: ISideBarGroup[];
}
