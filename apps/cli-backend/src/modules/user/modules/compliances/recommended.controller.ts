import { Body, Controller, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { Public } from '@/decorators/public.decorator';

import Routes from './compliances.routes';
import type { IRecommendedResponseData } from './interfaces/responses';
import { RecommendedDto } from './classes/create.dto';
import { RecommendedContract } from './queries/contracts/recommended.contract';

@Controller(Routes.CONTROLLER)
export class RecommendedController {
	private readonly logger = new Logger(RecommendedController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@Public()
	@Post(Routes.RECOMMENDED)
	@HttpCode(HttpStatus.OK)
	public async recommended(@Body() recommendedDto: RecommendedDto): Promise<IRecommendedResponseData> {
		this.logger.log(`Will try to get recommeded compliance for languages: "${recommendedDto.languages}"`);

		const complianceData = await this.queryBus.execute<RecommendedContract, IRecommendedResponseData>(
			new RecommendedContract(recommendedDto.languages),
		);

		this.logger.log('Successfully got a recommended compliance');

		return complianceData;
	}
}
