import type { User } from '@prisma/client';

export interface IAutoAuthLoggedUser extends Pick<User, 'id' | 'name' | 'createdAt'> {}

export interface IAutoAuthLoggedUserResponse extends Pick<User, 'id' | 'name'> {
	readonly createdAt: number;
}

export interface IExternalLoggedUser extends Pick<User, 'id' | 'authType'> {}
