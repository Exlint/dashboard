import { GetGithubUserHandler } from './get-github-user.handler';
import { GetGoogleUserHandler } from './get-google-user.handler';
import { LoginHandler } from './login.handler';
import { UserIdExistsHandler } from './user-id-exists.handler';
import { ValidRefreshTokenHandler } from './valid-refresh-token.handler';

export const QueryHandlers = [
	UserIdExistsHandler,
	LoginHandler,
	GetGithubUserHandler,
	GetGoogleUserHandler,
	ValidRefreshTokenHandler,
];
