import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AddRecommendedController } from './add-recommended.controller';

import { GetComplianceController } from './get-compliance.controller';
import { BelongingComplianceGuard } from './guards/belonging-compliance.guard';
import { QueryHandlers } from './queries/handlers';
import { RecommendedController } from './recommended.controller';

@Module({
	imports: [CqrsModule],
	controllers: [GetComplianceController, RecommendedController, AddRecommendedController],
	providers: [...QueryHandlers, BelongingComplianceGuard],
})
export class CompliancesModule {}
