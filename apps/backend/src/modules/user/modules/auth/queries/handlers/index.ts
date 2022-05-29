import { CreateGoogleUserHandler } from './create-google-user.handler';
import { CreateLocalUserHandler } from './create-local-user.handler';
import { EmailExistsHandler } from './email-exists.handler';
import { GetGoogleUserHandler } from './get-google-user.handler';
import { LoginHandler } from './login.handler';

export const QueryHandlers = [
	CreateLocalUserHandler,
	CreateGoogleUserHandler,
	LoginHandler,
	EmailExistsHandler,
	GetGoogleUserHandler,
];
