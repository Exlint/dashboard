import type { Group, User } from '@prisma/client';

export interface IAutoAuthResponseData {
	readonly accessToken: string;
	readonly id: string;
	readonly name: string;
	readonly createdAt: number;
}

export interface ICliAuthResponseData extends Pick<User, 'email'> {
	readonly cliToken: string;
}

export type IGetGroupResponseData = Pick<Group, 'label'>;

export interface IAvailableLabelResponseData {
	readonly isAvailable: boolean;
}
