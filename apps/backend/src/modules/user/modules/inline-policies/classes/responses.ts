import { ApiResponseProperty } from '@nestjs/swagger';
import { PolicyLibrary, type Prisma } from '@prisma/client';

import type { IGetPolicyData } from '../interfaces/policy-data';

export class CreateInlinePolicyResponse {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public policyId!: string;
}

export class GetConfigurationResponse {
	@ApiResponseProperty({
		type: Object,
		example: { yazifConfig1: 'Yazif', yazifConfig2: 'Yazif 2' },
	})
	public configuration!: Prisma.JsonValue;
}

export class GetResponse implements IGetPolicyData {
	@ApiResponseProperty({
		type: String,
		example: 'Yazif Policy',
	})
	public label!: string;

	@ApiResponseProperty({
		enum: [PolicyLibrary],
		example: PolicyLibrary.DEPCHECK,
	})
	public library!: PolicyLibrary;

	@ApiResponseProperty({
		type: Number,
		example: 10000,
	})
	public createdAt!: number;

	@ApiResponseProperty({
		type: String,
		example: 'Yazif Group',
	})
	public groupLabel!: string | null;
}

export class GetRulesResponse {
	@ApiResponseProperty({
		type: Object,
		example: { yazifRule1: [2], yazifRule2: [1] },
	})
	public rules!: Prisma.JsonValue;
}
