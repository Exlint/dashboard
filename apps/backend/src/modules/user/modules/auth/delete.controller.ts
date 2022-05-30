import { Controller, Delete, HttpCode, HttpStatus, Logger } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { DeleteUserContract } from './commands/contracts/delete-user.contract';

@Controller('auth')
export class DeleteController {
	private readonly logger = new Logger(DeleteController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@Delete('delete')
	@HttpCode(HttpStatus.OK)
	public async register(@CurrentUserId() userId: string): Promise<void> {
		this.logger.log(`Will try to delete a user with an Id: "${userId}"`);

		await this.commandBus.execute<DeleteUserContract, void>(new DeleteUserContract(userId));

		this.logger.log('Successfully deleted a user');
	}
}
