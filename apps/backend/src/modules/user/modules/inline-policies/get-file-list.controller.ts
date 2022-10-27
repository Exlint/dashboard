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

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { FileListType } from '@/models/file-list';

import Routes from './inline-policies.routes';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { GetFileListResponse } from './classes/responses';
import { GetFileListContract } from './queries/contracts/get-file-list.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class GetFileListController {
	private readonly logger = new Logger(GetFileListController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Get file list of linter/formatter to scan or to ignore' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'If fetched the file list successfully',
		type: GetFileListResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to get the file list' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Get(Routes.GET_FILE_LIST)
	@HttpCode(HttpStatus.OK)
	public async setFileList(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
		@Param('file_list_type') fileListType: string,
	): Promise<GetFileListResponse> {
		this.logger.log(
			`Will try to get file list of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		const fileListTypeParsed = fileListType === '1' ? FileListType.Ignore : FileListType.File;

		const fileList = await this.queryBus.execute<GetFileListContract, string[]>(
			new GetFileListContract(policyId, fileListTypeParsed),
		);

		this.logger.log(
			`Successfully fetched file list of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		return { fileList };
	}
}
