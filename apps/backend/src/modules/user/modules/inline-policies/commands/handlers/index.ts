import { DeleteHandler } from './delete.handler';
import { EditLabelHandler } from './edit-label.handler';
import { SetCodeConfigurationHandler } from './set-code-configuration.handler';
import { SetFileListHandler } from './set-file-list.handler';

export const CommandHandlers = [
	EditLabelHandler,
	DeleteHandler,
	SetFileListHandler,
	SetCodeConfigurationHandler,
];
