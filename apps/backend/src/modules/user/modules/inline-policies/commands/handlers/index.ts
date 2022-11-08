import { DeleteHandler } from './delete.handler';
import { EditLabelHandler } from './edit-label.handler';
import { SetCodeConfigurationHandler } from './set-code-configuration.handler';
import { SetFilesListHandler } from './set-files-list.handler';

export const CommandHandlers = [
	EditLabelHandler,
	DeleteHandler,
	SetFilesListHandler,
	SetCodeConfigurationHandler,
];
