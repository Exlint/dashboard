import type { User } from '@prisma/client';

export interface IAutoAuthLoggedUser extends Pick<User, 'id' | 'name' | 'createdAt'> {}

export interface IExternalLoggedUser extends Pick<User, 'id' | 'authType'> {}
