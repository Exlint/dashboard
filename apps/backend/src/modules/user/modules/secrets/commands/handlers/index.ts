import { DeleteSecretHandler } from './delete-secret.handler';
import { EditSecretHandler } from './edit-secret.handler';
import { RevokeSecretsHandler } from './revoke-secrets.handler';

export const CommandHandlers = [DeleteSecretHandler, RevokeSecretsHandler, EditSecretHandler];
