import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AddRecommendedController } from './add-recommended.controller';

import { GetGroupController } from './get-group.controller';
import { BelongingGroupGuard } from './guards/belonging-group.guard';
import { QueryHandlers } from './queries/handlers';
import { RecommendedController } from './recommended.controller';

@Module({
	imports: [CqrsModule],
	controllers: [GetGroupController, RecommendedController, AddRecommendedController],
	providers: [...QueryHandlers, BelongingGroupGuard],
})
export class GroupsModule {}
