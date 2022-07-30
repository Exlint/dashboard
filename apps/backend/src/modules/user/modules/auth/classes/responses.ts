import { ApiResponseProperty } from '@nestjs/swagger';

import type { IAutoAuthLoggedUser } from '../interfaces/user';

export class RefreshTokenResponse {
	@ApiResponseProperty({
		type: String,
		example:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
	})
	public accessToken!: string;
}

export class AutoLoginResponse implements IAutoAuthLoggedUser {
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
}
