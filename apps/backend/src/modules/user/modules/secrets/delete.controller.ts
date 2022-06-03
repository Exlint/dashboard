import { Controller, Delete, HttpCode, HttpStatus, Logger, Param, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import { DeleteSecretContract } from './commands/contracts/delete-secret.contract';
import { RevokeSecretsContract } from './commands/contracts/revoke-secrets.contract';
import { BelongingSecretGuard } from './guards/belonging-secret.guard';
import Routes from './secrets.routes';

@Controller(Routes.CONTROLLER)
export class DeleteController {
	private readonly logger = new Logger(DeleteController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@UseGuards(BelongingSecretGuard)
	@Delete(Routes.DELETE)
	@HttpCode(HttpStatus.OK)
	public async delete(@Param('secret_id') secretId: string): Promise<void> {
		this.logger.log(`Will try to delete a client secret with Id: "${secretId}"`);

		await this.commandBus.execute<DeleteSecretContract, void>(new DeleteSecretContract(secretId));

		this.logger.log('Successfully deleted a client secret');
	}

	@Delete(Routes.REVOKE_ALL)
	@HttpCode(HttpStatus.OK)
	public async revokeAll(@CurrentUserId() userId: string): Promise<void> {
		this.logger.log(`Will try to revoke all secrets of user with an Id: "${userId}"`);

		await this.commandBus.execute<RevokeSecretsContract, void>(new RevokeSecretsContract(userId));

		this.logger.log('Successfully deleted a client secret');
	}
}
