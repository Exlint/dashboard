import { ApiResponseProperty } from '@nestjs/swagger';
import { PolicyLibrary } from '@prisma/client';

import type { IUserGroupGetAll, IUserGroupInlinePolicy } from '../interfaces/user-group';

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

class UserGroupGetAll implements IUserGroupGetAll {
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
	public inlinePolicies!: IUserGroupInlinePolicy[];
}

export class CreateGroupResponse {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public groupId!: string;
}

export class GetAllGroupsResponse {
	@ApiResponseProperty({
		type: [UserGroupGetAll],
	})
	public groups!: IUserGroupGetAll[];
}
