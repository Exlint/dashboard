import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CommandHandlers } from './commands/handlers';
import { DeleteController } from './delete.controller';
import { BelongingRuleGuard } from './guards/belonging-rule.guard';

@Module({
	imports: [CqrsModule],
	controllers: [DeleteController],
	providers: [BelongingRuleGuard, ...CommandHandlers],
})
export class RuleModule {}
