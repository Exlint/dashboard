import { Controller, Delete, HttpCode, HttpStatus, Logger, Param, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './inline-policies.routes';
import { DeleteInlineContract } from './commands/contracts/delete-inline.contract';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class DeleteInlineController {
	private readonly logger = new Logger(DeleteInlineController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: 'Delete a policy by its identifier' })
	@ApiBearerAuth('access-token')
	@UseGuards(BelongingInlinePolicyGuard)
	@Delete(Routes.DELETE)
	@HttpCode(HttpStatus.OK)
	public async deleteInline(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
	): Promise<void> {
		this.logger.log(
			`Will try to delete an inline policy for a user with an Id: "${userId}" and an inline policy Id: "${policyId}"`,
		);

		await this.commandBus.execute<DeleteInlineContract, string>(new DeleteInlineContract(policyId));

		this.logger.log(
			`Successfully deleted an inline policy for a user with an Id: "${userId}" and an inline policy Id: "${policyId}"`,
		);
	}
}
