import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { GetGroupController } from './get-group.controller';
import { BelongingGroupGuard } from './guards/belonging-group.guard';
import { QueryHandlers } from './queries/handlers';

@Module({
	imports: [CqrsModule],
	controllers: [GetGroupController],
	providers: [...QueryHandlers, BelongingGroupGuard],
})
export class GroupsModule {}
