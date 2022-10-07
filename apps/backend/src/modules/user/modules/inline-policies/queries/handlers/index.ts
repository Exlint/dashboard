import { AvailableLabelHandler } from './available-label.handler';
import { CreateHandler } from './create.handler';
import { GetHandler } from './get.handler';
import { GroupHasLibraryHandler } from './group-has-library.handler';
import { UserGroupLibrariesHandler } from './user-group-libraries.handler';

export const QueryHandlers = [
	AvailableLabelHandler,
	UserGroupLibrariesHandler,
	GroupHasLibraryHandler,
	CreateHandler,
	GetHandler,
];
