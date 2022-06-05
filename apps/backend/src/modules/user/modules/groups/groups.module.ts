import { Module } from '@nestjs/common';

import { CommandHandlers } from './commands/handlers';
import { CreateController } from './create.controller';
import { DeleteController } from './delete.controller';
import { EditLabelController } from './edit-label.controller';
import { BelongingGroupGuard } from './guards/belonging-group.guard';
import { QueryHandlers } from './queries/handlers';

@Module({
	imports: [],
	controllers: [CreateController, EditLabelController, DeleteController],
	providers: [...QueryHandlers, ...CommandHandlers, BelongingGroupGuard],
})
export class GroupsModule {}
