import { Controller, Get, HttpCode, HttpStatus, Logger, Param } from '@nestjs/common';
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

import Routes from './compliances.routes';
import { AvailableLabelResponse } from './classes/responses';
import { AvailableLabelContract } from './queries/contracts/available-label.contract';

@ApiTags('Compliances')
@Controller(Routes.CONTROLLER)
export class AvailableLabelController {
	private readonly logger = new Logger(AvailableLabelController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Check whether a provided label is available' })
	@ApiBearerAuth('access-token')
	@ApiOkResponse({
		description: 'Returns whether the provided label is available',
		type: AvailableLabelResponse,
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is invalid or missing',
	})
	@ApiInternalServerErrorResponse({ description: 'If get availability status of the label' })
	@Get(Routes.AVAILABLE_LABEL)
	@HttpCode(HttpStatus.OK)
	public async availableLabel(
		@CurrentUserId() userId: string,
		@Param('label') label: string,
	): Promise<AvailableLabelResponse> {
		this.logger.log(`Will try to get availability status of label: "${label}" with an Id: "${userId}"`);

		const isAvailable = await this.queryBus.execute<AvailableLabelContract, boolean>(
			new AvailableLabelContract(userId, label),
		);

		this.logger.log(`Successfully got availability status of label: "${label}" with an Id: "${userId}"`);

		return {
			isAvailable,
		};
	}
}
