import { Body, Controller, HttpCode, HttpStatus, Logger, Patch, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { RefreshSecretDto } from './classes/refresh-secret.dto';

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
	public async refreshSecret(@Body() refreshSecretDto: RefreshSecretDto): Promise<IRefreshClientSecret> {
		this.logger.log(`Will try to refresh a client secret with Id: "${refreshSecretDto.secretId}"`);

		const secret = await this.queryBus.execute<RefreshSecretContract, string>(
			new RefreshSecretContract(refreshSecretDto.secretId),
		);

		this.logger.log('Successfully refreshed a client secret');

		return {
			clientSecret: secret,
		};
	}
}
