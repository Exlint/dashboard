import { AvailableLabelHandler } from './available-label.handler';
import { CreateGroupHandler } from './create-group.handler';
import { GetAllGroupsHandler } from './get-all-groups.handler';
import { GetGroupHandler } from './get-group.handler';

export const QueryHandlers = [
	CreateGroupHandler,
	GetAllGroupsHandler,
	AvailableLabelHandler,
	GetGroupHandler,
];
