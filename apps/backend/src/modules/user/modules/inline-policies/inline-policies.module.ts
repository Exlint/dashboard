import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { BelongingGroupGuard } from '@/guards/belonging-group.guard';

import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { AvailableLabelController } from './available-label.controller';
import { GetLibrariesController } from './get-libraries.controller';
import { CreateController } from './create.controller';
import { GetController } from './get.controller';
import { BelongingInlinePolicyGuard } from './guards/belonging-inline-policy.guard';
import { EditLabelController } from './edit-label.controller';
import { DeleteController } from './delete.controller';
import { SetFileListController } from './set-file-list.controller';
import { GetFileListController } from './get-file-list.controller';
import { SetCodeConfigurationController } from './set-code-configuration.controller';
import { GetCodeConfigurationController } from './get-code-configuration.controller';

@Module({
	imports: [CqrsModule],
	controllers: [
		AvailableLabelController,
		GetLibrariesController,
		CreateController,
		GetController,
		EditLabelController,
		DeleteController,
		SetFileListController,
		GetFileListController,
		GetCodeConfigurationController,
		SetCodeConfigurationController,
	],
	providers: [
		BelongingInlinePolicyGuard,
		BelongingGroupGuard,
		...QueryHandlers,
		...CommandHandlers,
		...EventHandlers,
	],
})
export class InlinePoliciesModule {}
