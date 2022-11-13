import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { BelongingInlinePolicyGuard } from '@/guards/belonging-inline-policy.guard';

import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { DeleteController } from './delete.controller';
import { BelongingRuleGuard } from './guards/belonging-rule.guard';
import { GetRulesController } from './get-rules.controller';

@Module({
	imports: [CqrsModule],
	controllers: [DeleteController, GetRulesController],
	providers: [BelongingInlinePolicyGuard, BelongingRuleGuard, ...CommandHandlers, ...QueryHandlers],
})
export class RuleModule {}
