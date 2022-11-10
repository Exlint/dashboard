import { ApiResponseProperty } from '@nestjs/swagger';
import type { IRefreshTokenResponseData, IAutoAuthResponseData } from '@exlint-dashboard/common';

export class RefreshTokenResponse implements IRefreshTokenResponseData {
	@ApiResponseProperty({
		type: String,
		example:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
	})
	public accessToken!: string;
}

export class AutoAuthResponse implements IAutoAuthResponseData {
	@ApiResponseProperty({
		type: String,
		example:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
	})
	public accessToken!: string;

	@ApiResponseProperty({ type: String, example: '62e5362119bea07115434f4a' })
	public id!: string;

	@ApiResponseProperty({ type: String, example: 'Yazif' })
	public name!: string;

	@ApiResponseProperty({ type: Number, example: 43343234223 })
	public createdAt!: number;
}
