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

import Routes from './inline-policies.routes';
import { DeleteContract } from './commands/contracts/delete.contract';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class DeleteController {
	private readonly logger = new Logger(DeleteController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: 'Deleting a policy with provided identifier' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({ description: 'If successfully deleted the policy' })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to delete the policy' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Delete(Routes.DELETE)
	@HttpCode(HttpStatus.OK)
	public async delete(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
	): Promise<void> {
		this.logger.log(
			`Will try to delete a policy with an ID: "${policyId}" for a user with an ID: "${userId}"`,
		);

		await this.commandBus.execute<DeleteContract, void>(new DeleteContract(policyId));

		this.logger.log(
			`Successfully deleted a policy with an ID: "${policyId}" for a user with an ID: "${userId}"`,
		);
	}
}
