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
import { BelongingInlinePolicyGuard } from '@/guards/belonging-inline-policy.guard';

import Routes from './inline-policies.routes';
import { GetFormSchemaResponse } from './classes/responses';
import { GetFormSchemaContract } from './queries/contracts/get-form-schema.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class GetFormSchemaController {
	private readonly logger = new Logger(GetFormSchemaController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Get form schema library' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'If fetched the form schema successfully',
		type: GetFormSchemaResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to fetch the form schema' })
	@UseGuards(BelongingInlinePolicyGuard)
	@Get(Routes.GET_FORM_SCHEMA)
	@HttpCode(HttpStatus.OK)
	public async getFormSchema(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
	): Promise<GetFormSchemaResponse> {
		this.logger.log(
			`Will try to fetch form schema of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		const formSchema = await this.queryBus.execute<GetFormSchemaContract, GetFormSchemaResponse>(
			new GetFormSchemaContract(policyId),
		);

		this.logger.log(
			`Successfully fetched form schema of policy with an ID: "${policyId}" for a user with an Id: "${userId}"`,
		);

		return formSchema;
	}
}
