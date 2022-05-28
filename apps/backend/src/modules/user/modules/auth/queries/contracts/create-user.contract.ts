import { IAuthType } from '../../interfaces/auth-type';

interface ICreateUserData {
	readonly name: string;
	readonly email: string;
	readonly password?: string;
	readonly authType: IAuthType;
}

export class CreateUserContract {
	constructor(public readonly registerData: ICreateUserData) {}
}
