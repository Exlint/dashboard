import { EmailExistsHandler } from './email-exists.handler';
import { LoginHandler } from './login.handler';
import { RegisterHandler } from './register.handler';

export const QueryHandlers = [RegisterHandler, LoginHandler, EmailExistsHandler];
