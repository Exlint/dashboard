import { CreateGithubUserHandler } from './create-github-user.handler';
import { CreateGoogleUserHandler } from './create-google-user.handler';
import { CreateLocalUserHandler } from './create-local-user.handler';
import { EmailExistsHandler } from './email-exists.handler';
import { GetGithubUserHandler } from './get-github-user.handler';
import { GetGoogleUserHandler } from './get-google-user.handler';
import { LoginHandler } from './login.handler';

export const QueryHandlers = [
	CreateLocalUserHandler,
	CreateGoogleUserHandler,
	CreateGithubUserHandler,
	LoginHandler,
	EmailExistsHandler,
	GetGoogleUserHandler,
	GetGithubUserHandler,
];
