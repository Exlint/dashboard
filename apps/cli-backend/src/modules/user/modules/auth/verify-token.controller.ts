import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

import Routes from './auth.routes';

@Controller(Routes.CONTROLLER)
export class VerifyTokenController {
	@Get(Routes.VERIFY_TOKEN)
	@HttpCode(HttpStatus.OK)
	public verifyToken(): void {
		return;
	}
}
