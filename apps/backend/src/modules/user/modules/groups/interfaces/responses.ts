import type { IUserGroupGetAll } from './user-group';

export interface ICreateGroupResponse {
	groupId: string;
}

export interface IGetAllGroupsResponse {
	groups: IUserGroupGetAll[];
}
