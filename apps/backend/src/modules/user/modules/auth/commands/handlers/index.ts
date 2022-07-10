import { AddRefreshTokenHandler } from './add-refresh-token.handler';
import { DeleteUserHandler } from './delete-user.handler';
import { RemoveOldRefreshTokensHandler } from './remove-old-refresh-tokens.handler';
import { UpdateExternalTokenHandler } from './update-external-token.handler';

export const CommandHandlers = [
	AddRefreshTokenHandler,
	RemoveOldRefreshTokensHandler,
	DeleteUserHandler,
	UpdateExternalTokenHandler,
];
