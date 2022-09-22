import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { BelongingGroupGuard } from '@/guards/belonging-group.guard';

import { CommandHandlers } from './commands/handlers';
import { CreateController } from './create.controller';
import { DeleteController } from './delete.controller';
import { EditLabelController } from './edit-label.controller';
import { QueryHandlers } from './queries/handlers';
import { EventHandlers } from './events/handlers';
import { GetAllController } from './get-all.controller';
import { AvailableLabelController } from './available-label.controller';
import { GetController } from './get.contoller';
import { GetInlinePoliciesController } from './get-inline-policies.controller';
import { EditDescriptionController } from './edit-description.controller';

@Module({
	imports: [CqrsModule],
	controllers: [
		CreateController,
		EditLabelController,
		DeleteController,
		GetAllController,
		AvailableLabelController,
		GetController,
		GetInlinePoliciesController,
		EditDescriptionController,
	],
	providers: [...QueryHandlers, ...CommandHandlers, ...EventHandlers, BelongingGroupGuard],
})
export class GroupsModule {}
