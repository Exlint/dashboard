import { Body, Controller, Post } from '@nestjs/common';

import { RegisterDto } from './classes/register.dto';

@Controller('auth')
export class AuthController {
	@Post('register')
	public register(@Body() registerDto: RegisterDto): string {
		return JSON.stringify(registerDto);
	}
}
