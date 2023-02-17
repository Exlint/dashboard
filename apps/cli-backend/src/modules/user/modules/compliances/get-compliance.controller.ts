import { Controller, Get, HttpCode, HttpStatus, Logger, Param, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';

import { BelongingComplianceGuard } from './guards/belonging-compliance.guard';
import Routes from './compliances.routes';
import { GetComplianceContract } from './queries/contracts/get-compliance.contract';
import type { IGetComplianceResponseData } from './interfaces/responses';

@Controller(Routes.CONTROLLER)
export class GetComplianceController {
	private readonly logger = new Logger(GetComplianceController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@UseGuards(BelongingComplianceGuard)
	@Get(Routes.GET_COMPLIANCE)
	@HttpCode(HttpStatus.OK)
	public async getCompliance(
		@Param('compliance_id') complianceId: string,
		@CurrentUserId() userId: string,
	): Promise<IGetComplianceResponseData> {
		this.logger.log(
			`Will try to get a compliance with an Id ${complianceId} for a user with an Id: ${userId}`,
		);

		const complianceData = await this.queryBus.execute<GetComplianceContract, IGetComplianceResponseData>(
			new GetComplianceContract(complianceId),
		);

		this.logger.log(
			`Successfully got a compliance data with an Id: ${complianceId} for a user with an Id: ${userId}`,
		);

		return complianceData;
	}
}
