import { ApiResponseProperty } from '@nestjs/swagger';
import { PolicyLibrary, Prisma } from '@prisma/client';

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

export class GetResponse {
	@ApiResponseProperty({
		type: String,
		example: 'Yazif Policy',
	})
	public label!: string;

	@ApiResponseProperty({
		type: [PolicyLibrary],
		example: PolicyLibrary.DEPCHECK,
	})
	public library!: PolicyLibrary;

	@ApiResponseProperty({
		type: Number,
		example: 10000,
	})
	public createdAt!: number;
}
