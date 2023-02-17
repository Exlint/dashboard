import { AddRecommendedHandler } from './add-recommended.handler';
import { GetComplianceHandler } from './get-compliance.handler';
import { RecommendedHandler } from './recommended.handler';

export const QueryHandlers = [GetComplianceHandler, RecommendedHandler, AddRecommendedHandler];
