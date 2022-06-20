import { User } from '@prisma/client';

export type ILocalStrategyUser = Pick<User, 'id' | 'passwordHash'>;
