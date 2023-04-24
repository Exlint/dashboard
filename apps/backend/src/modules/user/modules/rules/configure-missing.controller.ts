import { Body, Controller, HttpCode, HttpStatus, Logger, Param, Post, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
	ApiBadRequestResponse,
	ApiBearerAuth,
	ApiCreatedResponse,
	ApiInternalServerErrorResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { PolicyLibrary } from '@prisma/client';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { Library } from '@/decorators/library.decorator';
import { RulablePolicyGuard } from '@/guards/rulable-policy.guard';

import Routes from './rules.routes';
import { EnableMissingResponse } from './classes/enable-missing.dto';
import { ConfigureMissingRuleDto, type ConfigureMissingRuleResponse } from './classes/configure-missing.dto';
import { ConfigureMissingContract } from './queries/contracts/configure-missing.contract';

@ApiTags('Rules')
@Controller(Routes.CONTROLLER)
export class ConfigureMissingController {
	private readonly logger = new Logger(ConfigureMissingController.name);

	constructor(private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Configure a missing rule for a policy' })
	@ApiBearerAuth('access-token')
	@ApiCreatedResponse({
		description: 'If successfully configured the missing rule',
		type: EnableMissingResponse,
	})
	@ApiBadRequestResponse({ description: "If rule name is invalid or policy's library has no rules" })
	@ApiUnauthorizedResponse({
		description: 'If access token is either missing or invalid, or policy does not belong to user',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to configure the missing rule' })
	@UseGuards(RulablePolicyGuard)
	@Post(Routes.CONFIGURE_MISSING)
	@HttpCode(HttpStatus.CREATED)
	public async configureMissing(
		@CurrentUserId() userId: string,
		@Param('policy_id') policyId: string,
		@Body() configureMissingRuleDto: ConfigureMissingRuleDto,
		@Library() policyLibrary: PolicyLibrary,
	): Promise<ConfigureMissingRuleResponse> {
		this.logger.log(
			`Will try to configure a missing rule for a policy with an ID: "${policyId}" for a user with an ID: "${userId}"`,
		);

		const createdRuleId = await this.queryBus.execute<
			ConfigureMissingContract,
			ConfigureMissingRuleResponse['id']
		>(
			new ConfigureMissingContract(
				policyId,
				configureMissingRuleDto.name,
				configureMissingRuleDto.configuration,
				policyLibrary,
			),
		);

		this.logger.log(
			`Successfully configured a missing rule with an ID: "${createdRuleId}" for a user with an ID: "${userId}"`,
		);

		return { id: createdRuleId };
	}
}
