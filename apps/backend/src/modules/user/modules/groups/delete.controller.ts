import { Controller, Delete, HttpCode, HttpStatus, Logger, Param, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { BelongingGroupGuard } from '@/guards/belonging-group.guard';

import Routes from './groups.routes';
import { DeleteContract } from './commands/contracts/delete.contract';

@ApiTags('Groups')
@Controller(Routes.CONTROLLER)
export class DeleteController {
	private readonly logger = new Logger(DeleteController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: 'Deleting a group with provided identifier' })
	@ApiBearerAuth('access-token')
	@UseGuards(BelongingGroupGuard)
	@Delete(Routes.DELETE)
	@HttpCode(HttpStatus.OK)
	public async delete(@CurrentUserId() userId: string, @Param('group_id') groupId: string): Promise<void> {
		this.logger.log(`Will try to delete a group with an Id ${groupId} for a user with an Id: ${userId}`);

		await this.commandBus.execute<DeleteContract, void>(new DeleteContract(groupId));

		this.logger.log(
			`Successfully deleted a group with an Id: ${groupId} for a user with an Id: ${userId}`,
		);
	}
}
