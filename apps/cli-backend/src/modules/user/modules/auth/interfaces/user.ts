import { User } from '@prisma/client';

export type ILocalStrategyUser = Pick<User, 'id' | 'passwordHash'>;

export type ILocalLoginUser = Pick<User, 'id'> & {
	readonly port: string;
};

export type IExternalLoggedUser = Pick<User, 'id' | 'authType'>;
