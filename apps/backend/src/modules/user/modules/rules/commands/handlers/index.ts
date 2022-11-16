import { DeleteHandler } from './delete.handler';
import { DisableHandler } from './disable.handler';
import { EnableExistHandler } from './enable-exist.handler';
import { UpdateConfigurationHandler } from './update-configuration.handler';

export const CommandHandlers = [
	DeleteHandler,
	EnableExistHandler,
	DisableHandler,
	UpdateConfigurationHandler,
];
