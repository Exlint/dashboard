import { GetGithubUserHandler } from './get-github-user.handler';
import { GetGoogleUserHandler } from './get-google-user.handler';
import { LoginHandler } from './login.handler';
import { UserIdExistsHandler } from './user-id-exists.handler';

export const QueryHandlers = [UserIdExistsHandler, LoginHandler, GetGithubUserHandler, GetGoogleUserHandler];
