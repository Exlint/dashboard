import { ApiResponseProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

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
