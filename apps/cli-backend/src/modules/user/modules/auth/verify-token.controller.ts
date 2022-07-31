import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { RealIP } from 'nestjs-real-ip';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { CurrentUserEmail } from '@/decorators/current-user-email.decorator';
import { IVerifyTokenResponse } from '@/interfaces/responses';

import Routes from './auth.routes';
import { CliRunMixpanelContract } from './events/contracts/cli-run-mixpanel.contract';

@Controller(Routes.CONTROLLER)
export class VerifyTokenController {
	constructor(private readonly eventBus: EventBus) {}

	@Get(Routes.VERIFY_TOKEN)
	@HttpCode(HttpStatus.OK)
	public verifyToken(
		@CurrentUserId() userId: string,
		@CurrentUserEmail() userEmail: string,
		@RealIP() ip: string,
	): IVerifyTokenResponse {
		this.eventBus.publish(new CliRunMixpanelContract(userId, ip));

		return { email: userEmail };
	}
}
