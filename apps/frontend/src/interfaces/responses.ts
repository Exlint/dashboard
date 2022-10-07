export interface IAutoAuthResponseData {
	readonly accessToken: string;
	readonly id: string;
	readonly name: string;
	readonly createdAt: number;
}

export interface ICliAuthResponseData {
	readonly cliToken: string;
	readonly email: string;
}

export interface IGetGroupResponse {
	readonly label: string;
}

export interface IAvailableLabelResponse {
	readonly isAvailable: boolean;
}
