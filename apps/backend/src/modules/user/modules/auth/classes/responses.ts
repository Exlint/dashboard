import { ApiResponseProperty } from '@nestjs/swagger';
import type { IRefreshTokenResponseData, IAutoAuthResponseData } from '@exlint.io/common';

export class RefreshTokenResponse implements IRefreshTokenResponseData {
	@ApiResponseProperty({
		type: String,
		example: 'an access token',
	})
	public accessToken!: string;
}

export class AutoAuthResponse implements IAutoAuthResponseData {
	@ApiResponseProperty({
		type: String,
		example: 'an access token',
	})
	public accessToken!: string;

	@ApiResponseProperty({ type: String, example: '62e5362119bea07115434f4a' })
	public id!: string;

	@ApiResponseProperty({ type: String, example: 'Yazif' })
	public name!: string;

	@ApiResponseProperty({ type: Number, example: 43343234223 })
	public createdAt!: number;
}
