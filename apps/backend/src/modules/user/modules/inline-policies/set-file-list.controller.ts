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
import { SetFileListDto } from './classes/set-file-list.dto';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { SetFileListContract } from './commands/contracts/set-file-list.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class SetFileListController {
	private readonly logger = new Logger(SetFileListController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@ApiOperation({ description: 'Set file list of linter/formatter to scan or to ignore' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'If set the file list successfully',
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to set the file list' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Patch(Routes.SET_FILE_LIST)
	@HttpCode(HttpStatus.OK)
	public async setFileList(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
		@Body() setFileListDto: SetFileListDto,
	): Promise<void> {
		this.logger.log(
			`Will try to set file list to policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		await this.commandBus.execute<SetFileListContract, void>(
			new SetFileListContract(policyId, setFileListDto.fileList, setFileListDto.type),
		);

		this.logger.log(
			`Successfully set file list to policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);
	}
}
