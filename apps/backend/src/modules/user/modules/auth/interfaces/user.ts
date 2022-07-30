import type { User } from '@prisma/client';

export interface IAutoAuthLoggedUser extends Pick<User, 'id' | 'name'> {}

export interface IExternalLoggedUser extends Pick<User, 'id' | 'authType'> {}
