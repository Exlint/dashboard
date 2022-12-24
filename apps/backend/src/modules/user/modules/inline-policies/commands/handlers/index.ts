import { DeleteHandler } from './delete.handler';
import { EditDescriptionHandler } from './edit-description.handler';
import { EditLabelHandler } from './edit-label.handler';
import { SetCodeConfigurationHandler } from './set-code-configuration.handler';
import { SetFilesListHandler } from './set-files-list.handler';
import { SetFormConfigurationHandler } from './set-form-configuration.handler';
import { SetIsFormConfigurationHandler } from './set-is-form-configuration.handler';

export const CommandHandlers = [
	EditLabelHandler,
	DeleteHandler,
	SetFilesListHandler,
	SetCodeConfigurationHandler,
	SetFormConfigurationHandler,
	SetIsFormConfigurationHandler,
	EditDescriptionHandler,
];
