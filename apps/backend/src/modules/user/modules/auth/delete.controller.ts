import { Controller, Delete, HttpCode, HttpStatus, Logger } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { DeleteUserContract } from './commands/contracts/delete-user.contract';
import Routes from './auth.routes';

@Controller(Routes.CONTROLLER)
export class DeleteController {
	private readonly logger = new Logger(DeleteController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@Delete(Routes.DELETE)
	@HttpCode(HttpStatus.OK)
	public async delete(@CurrentUserId() userId: string): Promise<void> {
		this.logger.log(`Will try to delete a user with an Id: "${userId}"`);

		await this.commandBus.execute<DeleteUserContract, void>(new DeleteUserContract(userId));

		this.logger.log('Successfully deleted a user');
	}
}
