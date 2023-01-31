import type {
	IAvailableLabelResponseData,
	ICreateSecretResponseData,
	IGetAllSecretsResponseData,
	IRefreshSecretResponseData,
} from '@exlint.io/common';
import { ApiResponseProperty } from '@nestjs/swagger';

class UserSecretGetAll {
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

export class CreateSecretResponse implements ICreateSecretResponseData {
	@ApiResponseProperty({
		type: String,
		example: '62e5362119bea07115434f4a',
	})
	public id!: string;

	@ApiResponseProperty({
		type: String,
		example:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
	})
	public secret!: string;
}

export class RefreshClientSecretResponse implements IRefreshSecretResponseData {
	@ApiResponseProperty({
		type: String,
		example:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
	})
	public secret!: string;
}

export class GetAllSecretsResponse implements IGetAllSecretsResponseData {
	@ApiResponseProperty({
		type: [UserSecretGetAll],
	})
	public secrets!: UserSecretGetAll[];
}

export class AvailableLabelResponse implements IAvailableLabelResponseData {
	@ApiResponseProperty({
		type: Boolean,
	})
	public isAvailable!: boolean;
}
