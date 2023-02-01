import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';
import type { IEnableMissingRuleResponseData } from '@exlint.io/common';
import { BadRequestException } from '@nestjs/common';

import { DBRuleService } from '@/modules/database/rule.service';
import { librariesData } from '@/data/libraries-data';

import { EnableMissingContract } from '../contracts/enable-missing.contract';

@QueryHandler(EnableMissingContract)
export class EnableMissingHandler implements IQueryHandler<EnableMissingContract> {
	constructor(private readonly dbRuleService: DBRuleService) {}

	async execute(contract: EnableMissingContract): Promise<IEnableMissingRuleResponseData['id']> {
		const libraryData = librariesData.find((library) => library.name === contract.policyLibrary)!;

		if (!libraryData.rules![contract.name]) {
			throw new BadRequestException();
		}

		const createdRuleRecord = await this.dbRuleService.enableMissingRule(
			contract.policyId,
			contract.name,
		);

		return createdRuleRecord.id;
	}
}
