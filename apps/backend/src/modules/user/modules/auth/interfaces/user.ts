import { User, ClientSecret } from '@prisma/client';

import { IGroupData } from './groups-data';

interface ILoggedUserClientSecrets {
	clientSecrets: Pick<ClientSecret, 'id' | 'label' | 'expiration' | 'createdAt'>[];
}

export interface ILoggedUser extends Pick<User, 'id' | 'name'>, ILoggedUserClientSecrets {
	groupsData: IGroupData[];
}

export interface ILocalStrategyUser
	extends Pick<User, 'id' | 'passwordHash' | 'name'>,
		ILoggedUserClientSecrets {
	groupsData: IGroupData[];
}

export interface IExternalLoggedUser extends Pick<User, 'id' | 'authType'> {}
