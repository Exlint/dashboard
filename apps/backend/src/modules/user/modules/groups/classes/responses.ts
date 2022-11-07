import { ApiResponseProperty } from '@nestjs/swagger';
import { PolicyLibrary } from '@prisma/client';
import {
	type IAvailableLabelResponseData,
	type IGetAllGroupsResponseData,
	type IGetGroupResponseData,
	ILanguage,
	type ICreateGroupResponseData,
	type IGetPoliciesResponseData,
} from '@exlint-dashboard/common';

import type { IGroupInlinePolicy } from '../interfaces/group-policies';
import type { IUserGroupInlinePolicy } from '../interfaces/user-group';

class UserGroupInlinePolicyGetAll implements IUserGroupInlinePolicy {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public id!: string;

	@ApiResponseProperty({
		type: String,
		example: 'Yazif Policy',
	})
	public label!: string;

	@ApiResponseProperty({
		enum: PolicyLibrary,
	})
	public library!: PolicyLibrary;

	@ApiResponseProperty({
		type: Number,
		example: 5,
	})
	public rulesCount!: number;
}

class UserGroupGetAll {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public id!: string;

	@ApiResponseProperty({
		type: String,
		example: 'Yazif Group',
	})
	public label!: string;

	@ApiResponseProperty({
		type: [UserGroupInlinePolicyGetAll],
	})
	public librariesNames!: PolicyLibrary[];
}

class GroupInlinePolicy implements IGroupInlinePolicy {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public id!: string;

	@ApiResponseProperty({
		type: String,
		example: 'Yazif Policy',
	})
	public label!: string;

	@ApiResponseProperty({
		enum: PolicyLibrary,
	})
	public library!: PolicyLibrary;

	@ApiResponseProperty({
		type: String,
		example: 'JavaScript',
	})
	public language!: ILanguage;
}

export class CreateGroupResponse implements ICreateGroupResponseData {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public id!: string;
}

export class GetAllGroupsResponse implements IGetAllGroupsResponseData {
	@ApiResponseProperty({
		type: [UserGroupGetAll],
	})
	public groups!: UserGroupGetAll[];
}

export class AvailableLabelResponse implements IAvailableLabelResponseData {
	@ApiResponseProperty({
		type: Boolean,
		example: true,
	})
	public isAvailable!: boolean;
}

export class GetGroupResponse implements IGetGroupResponseData {
	@ApiResponseProperty({
		type: String,
		example: 'Yazif Group',
	})
	public label!: string;
}

export class GetInlinePoliciesResponse implements IGetPoliciesResponseData {
	@ApiResponseProperty({
		type: String,
		example: 'Yazif Group Description',
	})
	public description!: string | null;

	@ApiResponseProperty({
		type: Number,
		example: 10,
	})
	public count!: number;

	@ApiResponseProperty({
		type: [GroupInlinePolicy],
		example: 'Yazif Group Description',
	})
	public inlinePolicies!: IGroupInlinePolicy[];
}
