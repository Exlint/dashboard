import { AutoLoginHandler } from './auto-auth.handler';
import { CreateGithubUserHandler } from './create-github-user.handler';
import { CreateGoogleUserHandler } from './create-google-user.handler';
import { GetGithubUserHandler } from './get-github-user.handler';
import { GetGoogleUserHandler } from './get-google-user.handler';
import { ValidRefreshTokenHandler } from './valid-refresh-token.handler';

export const QueryHandlers = [
	CreateGoogleUserHandler,
	CreateGithubUserHandler,
	AutoLoginHandler,
	GetGoogleUserHandler,
	GetGithubUserHandler,
	ValidRefreshTokenHandler,
];
