import { RegisterDto } from '../../classes/register.dto';

export class RegisterContract {
	constructor(public readonly registerDto: RegisterDto) {}
}
