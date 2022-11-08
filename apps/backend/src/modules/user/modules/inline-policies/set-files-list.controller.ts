import { Body, Controller, HttpCode, HttpStatus, Logger, Param, Patch, UseGuards } from '@nestjs/common';
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
import { SetFilesListDto } from './classes/set-files-list.dto';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { SetFilesListContract } from './commands/contracts/set-files-list.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class SetFilesListController {
	private readonly logger = new Logger(SetFilesListController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: 'Set files list of linter/formatter to scan or to ignore' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'If set the files list successfully',
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to set the files list' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Patch(Routes.SET_FILE_LIST)
	@HttpCode(HttpStatus.OK)
	public async setFilesList(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
		@Body() setFilesListDto: SetFilesListDto,
	): Promise<void> {
		this.logger.log(
			`Will try to set files list to policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		await this.commandBus.execute<SetFilesListContract, void>(
			new SetFilesListContract(policyId, setFilesListDto.filesList, setFilesListDto.type),
		);

		this.logger.log(
			`Successfully set files list to policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);
	}
}
