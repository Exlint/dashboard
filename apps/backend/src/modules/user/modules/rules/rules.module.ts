import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { RuleablePolicyGuard } from '@/guards/ruleable-policy.guard';

import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { DeleteController } from './delete.controller';
import { BelongingRuleGuard } from './guards/belonging-rule.guard';
import { GetRulesController } from './get-rules.controller';
import { EnableRuleController } from './enable-rule.controller';

@Module({
	imports: [CqrsModule],
	controllers: [DeleteController, GetRulesController, EnableRuleController],
	providers: [RuleablePolicyGuard, BelongingRuleGuard, ...CommandHandlers, ...QueryHandlers],
})
export class RuleModule {}
