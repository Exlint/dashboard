import { CreateInlineHandler } from './create-inline.handler';
import { GetConfigurationHandler } from './get-configuration.handler';
import { GetRulesHandler } from './get-rules.handler';
import { GetHandler } from './get.handler';

export const QueryHandlers = [CreateInlineHandler, GetConfigurationHandler, GetHandler, GetRulesHandler];
