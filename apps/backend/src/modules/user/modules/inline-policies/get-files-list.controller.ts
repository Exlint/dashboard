import { Controller, Get, HttpCode, HttpStatus, Logger, Param, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
	ApiBearerAuth,
	ApiInternalServerErrorResponse,
	ApiOkResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { FilesListType } from '@exlint-dashboard/common';

import { BelongingInlinePolicyGuard } from '@/guards/belonging-inline-policy.guard';
import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './inline-policies.routes';
import { GetFilesListResponse } from './classes/responses';
import { GetFilesListContract } from './queries/contracts/get-files-list.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class GetFilesListController {
	private readonly logger = new Logger(GetFilesListController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Get files list of linter/formatter to scan or to ignore' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'If fetched the files list successfully',
		type: GetFilesListResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to get the files list' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Get(Routes.GET_FILE_LIST)
	@HttpCode(HttpStatus.OK)
	public async setFilesList(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
		@Param('files_list_type') filesListType: FilesListType,
	): Promise<GetFilesListResponse> {
		this.logger.log(
			`Will try to get files list of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		const filesList = await this.queryBus.execute<GetFilesListContract, string[]>(
			new GetFilesListContract(policyId, filesListType),
		);

		this.logger.log(
			`Successfully fetched files list of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		return { filesList };
	}
}
