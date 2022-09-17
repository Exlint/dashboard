import { AvailableLabelHandler } from './available-label.handler';
import { CreateSecretHandler } from './create-secret.handler';
import { GetAllSecretsHandler } from './get-all-secrets.handler';
import { RefreshSecretHandler } from './refresh-secret.handler';

export const QueryHandlers = [
	CreateSecretHandler,
	RefreshSecretHandler,
	GetAllSecretsHandler,
	AvailableLabelHandler,
];
