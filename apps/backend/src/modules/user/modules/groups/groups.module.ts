import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { BelongingGroupGuard } from '@/guards/belonging-group.guard';

import { CommandHandlers } from './commands/handlers';
import { CreateController } from './create.controller';
import { DeleteController } from './delete.controller';
import { EditLabelController } from './edit-label.controller';
import { QueryHandlers } from './queries/handlers';

@Module({
	imports: [CqrsModule],
	controllers: [CreateController, EditLabelController, DeleteController],
	providers: [...QueryHandlers, ...CommandHandlers, BelongingGroupGuard],
})
export class GroupsModule {}
