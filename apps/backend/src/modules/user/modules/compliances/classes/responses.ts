import { ApiResponseProperty } from '@nestjs/swagger';
import { PolicyLibrary } from '@prisma/client';
import {
	type IAvailableLabelResponseData,
	type IGetAllCompliancesResponseData,
	type IGetComplianceResponseData,
	ILanguage,
	type ICreateComplianceResponseData,
	type IGetPoliciesResponseData,
} from '@exlint.io/common';

import type { IComplianceInlinePolicy } from '../interfaces/compliance-policies';
import type { IUserComplianceInlinePolicy } from '../interfaces/user-compliance';

class UserComplianceInlinePolicyGetAll implements IUserComplianceInlinePolicy {
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

class UserComplianceGetAll {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public id!: string;

	@ApiResponseProperty({
		type: String,
		example: 'Yazif Compliance',
	})
	public label!: string;

	@ApiResponseProperty({
		type: [UserComplianceInlinePolicyGetAll],
	})
	public librariesNames!: PolicyLibrary[];
}

class ComplianceInlinePolicy implements IComplianceInlinePolicy {
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

export class CreateComplianceResponse implements ICreateComplianceResponseData {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public id!: string;
}

export class GetAllCompliancesResponse implements IGetAllCompliancesResponseData {
	@ApiResponseProperty({
		type: [UserComplianceGetAll],
	})
	public compliances!: UserComplianceGetAll[];
}

export class AvailableLabelResponse implements IAvailableLabelResponseData {
	@ApiResponseProperty({
		type: Boolean,
		example: true,
	})
	public isAvailable!: boolean;
}

export class GetComplianceResponse implements IGetComplianceResponseData {
	@ApiResponseProperty({
		type: String,
		example: 'Yazif Compliance',
	})
	public label!: string;
}

export class GetInlinePoliciesResponse implements IGetPoliciesResponseData {
	@ApiResponseProperty({
		type: String,
		example: 'Yazif Compliance Description',
	})
	public description!: string | null;

	@ApiResponseProperty({
		type: Number,
		example: 10,
	})
	public count!: number;

	@ApiResponseProperty({
		type: [ComplianceInlinePolicy],
		example: 'Yazif Compliance Description',
	})
	public inlinePolicies!: IComplianceInlinePolicy[];
}
