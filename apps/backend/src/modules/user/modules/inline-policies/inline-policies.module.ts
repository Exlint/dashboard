import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { BelongingGroupGuard } from '@/guards/belonging-group.guard';

import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { CreateInlineController } from './create-inline.controller';
import { DeleteInlineController } from './delete-inline.controller';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { UpdateConfigurationController } from './update-configuration.controller';
import { AddRuleController } from './add-rule.controller';
import { RemoveRuleController } from './remove-rule.controller';
import { EventHandlers } from './events/handlers';
import { GetConfigurationController } from './get-configuration.controller';

@Module({
	imports: [CqrsModule],
	controllers: [
		CreateInlineController,
		DeleteInlineController,
		UpdateConfigurationController,
		AddRuleController,
		RemoveRuleController,
		GetConfigurationController,
	],
	providers: [
		BelongingGroupGuard,
		BelongingInlinePolicyGuard,
		...CommandHandlers,
		...QueryHandlers,
		...EventHandlers,
	],
})
export class InlinePoliciesModule {}
