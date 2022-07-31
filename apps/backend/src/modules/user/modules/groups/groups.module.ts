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

@Module({
	imports: [CqrsModule],
	controllers: [CreateController, EditLabelController, DeleteController, GetAllController],
	providers: [...QueryHandlers, ...CommandHandlers, ...EventHandlers, BelongingGroupGuard],
})
export class GroupsModule {}
