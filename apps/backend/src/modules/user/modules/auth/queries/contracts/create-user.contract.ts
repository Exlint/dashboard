import { RegisterDto } from '../../classes/register.dto';

export class CreateUserContract {
	constructor(public readonly registerDto: RegisterDto) {}
}
