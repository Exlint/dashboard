import { User, ClientSecret } from '@prisma/client';

interface ILoggedUserClientSecrets {
	clientSecrets: Pick<ClientSecret, 'id' | 'label' | 'expiration' | 'createdAt'>[];
}

export interface ILoggedUser extends Pick<User, 'id' | 'name'>, ILoggedUserClientSecrets {}

export interface ILocalStrategyUser
	extends Pick<User, 'id' | 'passwordHash' | 'name'>,
		ILoggedUserClientSecrets {}

export interface IExternalLoggedUser extends Pick<User, 'id' | 'authType'>, ILoggedUserClientSecrets {}
