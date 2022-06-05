import { Controller, HttpCode, HttpStatus, Logger, Param, Patch, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { BelongingSecretGuard } from './guards/belonging-secret.guard';
import { IRefreshClientSecret } from './interfaces/responses';
import { RefreshSecretContract } from './queries/contracts/refresh-secret.contract';
import Routes from './secrets.routes';

@Controller(Routes.CONTROLLER)
export class RefreshSecretController {
	private readonly logger = new Logger(RefreshSecretController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@UseGuards(BelongingSecretGuard)
	@Patch(Routes.REFRSH_SECRET)
	@HttpCode(HttpStatus.OK)
	public async refreshSecret(@Param('secret_id') secretId: string): Promise<IRefreshClientSecret> {
		this.logger.log(`Will try to refresh a client secret with Id: "${secretId}"`);

		const secret = await this.queryBus.execute<RefreshSecretContract, string>(
			new RefreshSecretContract(secretId),
		);

		this.logger.log('Successfully refreshed a client secret');

		return {
			clientSecret: secret,
		};
	}
}
