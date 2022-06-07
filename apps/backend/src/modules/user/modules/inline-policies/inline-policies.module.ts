import { Module } from '@nestjs/common';

import { BelongingGroupGuard } from '@/guards/belonging-group.guard';

import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { CreateInlineController } from './create-inline.controller';
import { DeleteInlineController } from './delete-inline.controller';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { UpdateConfigurationController } from './update-configuration.controller';
import { AddRuleController } from './add-rule.controller';
import { RemoveRuleController } from './remove-rule.controller';

@Module({
	imports: [],
	controllers: [
		CreateInlineController,
		DeleteInlineController,
		UpdateConfigurationController,
		AddRuleController,
		RemoveRuleController,
	],
	providers: [BelongingGroupGuard, BelongingInlinePolicyGuard, ...CommandHandlers, ...QueryHandlers],
})
export class InlinePoliciesModule {}
