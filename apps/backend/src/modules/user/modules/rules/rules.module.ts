import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { RuleablePolicyGuard } from '@/guards/ruleable-policy.guard';

import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { DeleteController } from './delete.controller';
import { BelongingRuleGuard } from './guards/belonging-rule.guard';
import { GetRulesController } from './get-rules.controller';
import { EnableExistController } from './enable-exist.controller';
import { EnableMissingController } from './enable-missing.controller';
import { DisableController } from './disable.controller';
import { UpdateConfigurationController } from './update-configuration.controller';
import { ConfigureMissingController } from './configure-missing.controller';

@Module({
	imports: [CqrsModule],
	controllers: [
		DeleteController,
		GetRulesController,
		EnableMissingController,
		EnableExistController,
		DisableController,
		UpdateConfigurationController,
		ConfigureMissingController,
	],
	providers: [RuleablePolicyGuard, BelongingRuleGuard, ...CommandHandlers, ...QueryHandlers],
})
export class RuleModule {}
