import { ConfigureMissingHandler } from './configure-missing.handler';
import { EnableMissingHandler } from './enable-missing.handler';
import { GetRulesHandler } from './get-rules.handler';

export const QueryHandlers = [GetRulesHandler, EnableMissingHandler, ConfigureMissingHandler];
