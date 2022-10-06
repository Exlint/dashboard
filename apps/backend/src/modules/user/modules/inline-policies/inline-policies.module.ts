import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { BelongingGroupGuard } from '@/guards/belonging-group.guard';

import { QueryHandlers } from './queries/handlers';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { AvailableLabelController } from './available-label.controller';
import { GetLibrariesController } from './get-libraries.controller';
import { createController } from './create.controller';

@Module({
	imports: [CqrsModule],
	controllers: [AvailableLabelController, GetLibrariesController, createController],
	providers: [BelongingGroupGuard, ...QueryHandlers, ...CommandHandlers, ...EventHandlers],
})
export class InlinePoliciesModule {}
