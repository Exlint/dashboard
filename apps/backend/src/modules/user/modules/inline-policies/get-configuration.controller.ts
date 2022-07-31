import { Controller, Get, HttpCode, HttpStatus, Logger, Param, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import type { Prisma } from '@prisma/client';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import Routes from './inline-policies.routes';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import type { IGetConfigurationResponse } from './interfaces/responses';
import { GetConfigurationContract } from './queries/contracts/get-configuration.contract';

@Controller(Routes.CONTROLLER)
export class GetConfigurationController {
	private readonly logger = new Logger(GetConfigurationController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@UseGuards(BelongingInlinePolicyGuard)
	@Get(Routes.GET_CONFIGURATION)
	@HttpCode(HttpStatus.OK)
	public async getConfiguration(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
	): Promise<IGetConfigurationResponse> {
		this.logger.log(
			`Will try to fetch policy configuration belongs to use with an Id: "${userId}" with policy Id: "${policyId}"`,
		);

		const policyConfiguration = await this.queryBus.execute<GetConfigurationContract, Prisma.JsonValue>(
			new GetConfigurationContract(policyId),
		);

		this.logger.log(
			`Successfully got policy configuration belongs to user with an Id: "${userId}" with policy Id: "${policyId}"`,
		);

		return {
			configuration: policyConfiguration,
		};
	}
}
