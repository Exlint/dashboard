import { DeleteHandler } from './delete.handler';
import { EditLabelHandler } from './edit-label.handler';
import { SetCodeConfigurationHandler } from './set-code-configuration.handler';
import { SetFilesListHandler } from './set-files-list.handler';
import { SetIsFormConfigurationHandler } from './set-is-form-configuration.handler';

export const CommandHandlers = [
	EditLabelHandler,
	DeleteHandler,
	SetFilesListHandler,
	SetCodeConfigurationHandler,
	SetIsFormConfigurationHandler,
];
