import { AddRefreshTokenHandler } from './add-refresh-token.handler';
import { DeleteUserHandler } from './delete-user.handler';
import { RemoveOldRefreshTokensHandler } from './remove-old-refresh-tokens.handler';

export const CommandHandlers = [AddRefreshTokenHandler, RemoveOldRefreshTokensHandler, DeleteUserHandler];
