import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';
import type { IConfigureMissingRuleResponseData } from '@exlint.io/common';
import { BadRequestException } from '@nestjs/common';

import { DBRuleService } from '@/modules/database/rule.service';
import { librariesData } from '@/data/libraries-data';

import { ConfigureMissingContract } from '../contracts/configure-missing.contract';

@QueryHandler(ConfigureMissingContract)
export class ConfigureMissingHandler implements IQueryHandler<ConfigureMissingContract> {
	constructor(private readonly dbRuleService: DBRuleService) {}

	async execute(contract: ConfigureMissingContract): Promise<IConfigureMissingRuleResponseData['id']> {
		const libraryData = librariesData.find((library) => library.name === contract.policyLibrary)!;

		if (!libraryData.rules![contract.name]) {
			throw new BadRequestException();
		}

		const createdRuleRecord = await this.dbRuleService.configureMissing(
			contract.policyId,
			contract.name,
			contract.configuration,
		);

		return createdRuleRecord.id;
	}
}
