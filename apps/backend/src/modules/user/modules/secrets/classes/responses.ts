import type { IAvailableLabelResponseData } from '@exlint-dashboard/common';
import { ApiResponseProperty } from '@nestjs/swagger';

import type { IUserSecretsGetAll } from '../interfaces/user-secrets';

class UserSecretGetAll implements IUserSecretsGetAll {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public id!: string;

	@ApiResponseProperty({
		type: String,
		example: 'Yazif Secret',
	})
	public label!: string;

	@ApiResponseProperty({
		type: Number,
		example: 12345678,
	})
	public expiration!: number | null;
}

export class CreateClientSecretResponse {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public secretId!: string;

	@ApiResponseProperty({
		type: String,
		example:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
	})
	public secretValue!: string;
}

export class RefreshClientSecretResponse {
	@ApiResponseProperty({
		type: String,
		example:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
	})
	public secretValue!: string;
}

export class GetAllSecretsResponse {
	@ApiResponseProperty({
		type: [UserSecretGetAll],
	})
	public secrets!: IUserSecretsGetAll[];
}

export class AvailableLabelResponse implements IAvailableLabelResponseData {
	@ApiResponseProperty({
		type: Boolean,
	})
	public isAvailable!: boolean;
}
