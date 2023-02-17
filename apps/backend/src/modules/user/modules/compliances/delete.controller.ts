import { Controller, Delete, HttpCode, HttpStatus, Logger, Param, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
	ApiBearerAuth,
	ApiInternalServerErrorResponse,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { BelongingComplianceGuard } from '@/guards/belonging-compliance.guard';

import Routes from './compliances.routes';
import { DeleteContract } from './commands/contracts/delete.contract';

@ApiTags('Compliances')
@Controller(Routes.CONTROLLER)
export class DeleteController {
	private readonly logger = new Logger(DeleteController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: 'Deleting a compliance with provided identifier' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully deleted the compliance' })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or compliance does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to delete the compliance' })
	@UseGuards(BelongingComplianceGuard)
	@Delete(Routes.DELETE)
	@HttpCode(HttpStatus.OK)
	public async delete(
		@CurrentUserId() userId: string,
		@Param('compliance_id') complianceId: string,
	): Promise<void> {
		this.logger.log(
			`Will try to delete a compliance with an Id ${complianceId} for a user with an Id: ${userId}`,
		);

		await this.commandBus.execute<DeleteContract, void>(new DeleteContract(complianceId));

		this.logger.log(
			`Successfully deleted a compliance with an Id: ${complianceId} for a user with an Id: ${userId}`,
		);
	}
}
