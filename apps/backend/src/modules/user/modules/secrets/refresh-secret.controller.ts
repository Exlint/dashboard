import { Controller, HttpCode, HttpStatus, Logger, Param, Patch, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
	ApiBearerAuth,
	ApiInternalServerErrorResponse,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { CurrentUserEmail } from '@/decorators/current-user-email.decorator';

import { BelongingSecretGuard } from './guards/belonging-secret.guard';
import { RefreshClientSecretResponse } from './classes/responses';
import { RefreshSecretContract } from './queries/contracts/refresh-secret.contract';
import Routes from './secrets.routes';

@ApiTags('Secrets')
@Controller(Routes.CONTROLLER)
export class RefreshSecretController {
	private readonly logger = new Logger(RefreshSecretController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Refresh a secret by its identifer' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: "If successfully refresh user's secret",
		type: RefreshClientSecretResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is invalid or missing, or secret does not belong the user',
	})
	@ApiInternalServerErrorResponse({ description: "If failed to refresh the user's secret" })
	@UseGuards(BelongingSecretGuard)
	@Patch(Routes.REFRSH_SECRET)
	@HttpCode(HttpStatus.OK)
	public async refreshSecret(
		@Param('secret_id') secretId: string,
		@CurrentUserId() userId: string,
		@CurrentUserEmail() userEmail: string,
	): Promise<RefreshClientSecretResponse> {
		this.logger.log(
			`Will try to refresh a client secret with Id: "${secretId}" for a user with Id: "${userId}"`,
		);

		const secret = await this.queryBus.execute<RefreshSecretContract, string>(
			new RefreshSecretContract(userId, userEmail, secretId),
		);

		this.logger.log('Successfully refreshed a client secret');

		return {
			secretValue: secret,
		};
	}
}
