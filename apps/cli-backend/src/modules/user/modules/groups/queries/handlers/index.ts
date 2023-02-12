import { AddRecommendedHandler } from './add-recommended.handler';
import { GetGroupHandler } from './get-group.handler';
import { RecommendedHandler } from './recommended.handler';

export const QueryHandlers = [GetGroupHandler, RecommendedHandler, AddRecommendedHandler];
