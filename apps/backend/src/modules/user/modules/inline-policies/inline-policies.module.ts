import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { BelongingInlinePolicyGuard } from '@/guards/belonging-inline-policy.guard';
import { BelongingComplianceGuard } from '@/guards/belonging-compliance.guard';
import { RulablePolicyGuard } from '@/guards/rulable-policy.guard';

import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { AvailableLabelController } from './available-label.controller';
import { GetLibrariesController } from './get-libraries.controller';
import { CreateController } from './create.controller';
import { GetController } from './get.controller';
import { EditLabelController } from './edit-label.controller';
import { DeleteController } from './delete.controller';
import { SetFilesListController } from './set-files-list.controller';
import { GetFilesListController } from './get-files-list.controller';
import { SetCodeConfigurationController } from './set-code-configuration.controller';
import { GetCodeConfigurationController } from './get-code-configuration.controller';
import { GetFormSchemaController } from './get-form-schema.controller';
import { SetIsFormConfigurationController } from './set-is-form-configuration.controller';
import { GetPolicyRulesController } from './get-policy-rules.controller';
import { EditDescriptionController } from './edit-description.controller';
import { SetFormConfigurationController } from './set-form-configuration.controller';

@Module({
	imports: [CqrsModule],
	controllers: [
		AvailableLabelController,
		GetLibrariesController,
		CreateController,
		GetController,
		EditLabelController,
		DeleteController,
		SetFilesListController,
		GetFilesListController,
		GetCodeConfigurationController,
		SetCodeConfigurationController,
		SetFormConfigurationController,
		GetFormSchemaController,
		SetIsFormConfigurationController,
		GetPolicyRulesController,
		EditDescriptionController,
	],
	providers: [
		BelongingInlinePolicyGuard,
		BelongingComplianceGuard,
		RulablePolicyGuard,
		...QueryHandlers,
		...CommandHandlers,
		...EventHandlers,
	],
})
export class InlinePoliciesModule {}
