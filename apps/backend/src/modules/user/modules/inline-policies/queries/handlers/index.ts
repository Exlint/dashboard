import { AvailableLabelHandler } from './available-label.handler';
import { CreateHandler } from './create.handler';
import { GetConfigurationHandler } from './get-configuration.handler';
import { GetFileListHandler } from './get-file-list.handler';
import { GetHandler } from './get.handler';
import { GroupHasLibraryHandler } from './group-has-library.handler';
import { UserGroupLibrariesHandler } from './user-group-libraries.handler';

export const QueryHandlers = [
	AvailableLabelHandler,
	UserGroupLibrariesHandler,
	GroupHasLibraryHandler,
	CreateHandler,
	GetHandler,
	GetFileListHandler,
	GetConfigurationHandler,
];
