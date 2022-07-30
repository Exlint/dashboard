import { Controller, HttpCode, HttpStatus, Logger, Param, Patch, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { CurrentUserEmail } from '@/decorators/current-user-email.decorator';

import { BelongingSecretGuard } from './guards/belonging-secret.guard';
import type { IRefreshClientSecret } from './interfaces/responses';
import { RefreshSecretContract } from './queries/contracts/refresh-secret.contract';
import Routes from './secrets.routes';

@ApiTags('Secrets')
@Controller(Routes.CONTROLLER)
export class RefreshSecretController {
	private readonly logger = new Logger(RefreshSecretController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Refresh a secret by its identifer' })
	@ApiBearerAuth('access-token')
	@UseGuards(BelongingSecretGuard)
	@Patch(Routes.REFRSH_SECRET)
	@HttpCode(HttpStatus.OK)
	public async refreshSecret(
		@Param('secret_id') secretId: string,
		@CurrentUserId() userId: string,
		@CurrentUserEmail() userEmail: string,
	): Promise<IRefreshClientSecret> {
		this.logger.log(
			`Will try to refresh a client secret with Id: "${secretId}" for a user with Id: "${userId}"`,
		);

		const secret = await this.queryBus.execute<RefreshSecretContract, string>(
			new RefreshSecretContract(userId, userEmail, secretId),
		);

		this.logger.log('Successfully refreshed a client secret');

		return {
			clientSecret: secret,
		};
	}
}
