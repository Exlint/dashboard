import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';
import type { IEnableRuleResponseData } from '@exlint-dashboard/common';
import { BadRequestException } from '@nestjs/common';

import { DBRuleService } from '@/modules/database/rule.service';
import { librariesData } from '@/data/libraries-data';

import { EnableRuleContract } from '../contracts/enable-rule.contract';

@QueryHandler(EnableRuleContract)
export class EnableRuleHandler implements IQueryHandler<EnableRuleContract> {
	constructor(private readonly dbRuleService: DBRuleService) {}

	async execute(contract: EnableRuleContract): Promise<IEnableRuleResponseData['id']> {
		const libraryData = librariesData.find((library) => library.name === contract.policyLibrary)!;

		if (!libraryData.rules![contract.name]) {
			throw new BadRequestException();
		}

		const createdRuleRecord = await this.dbRuleService.enableRule(contract.policyId, contract.name);

		return createdRuleRecord.id;
	}
}
