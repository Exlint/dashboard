import { AddRefreshTokenHandler } from './add-refresh-token.handler';
import { RemoveOldRefreshTokensHandler } from './remove-old-refresh-tokens.handler';

export const CommandHandlers = [AddRefreshTokenHandler, RemoveOldRefreshTokensHandler];
