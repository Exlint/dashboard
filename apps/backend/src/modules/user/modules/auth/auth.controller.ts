import { Body, Controller, Logger, Post } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { AuthService } from './auth.service';
import { RegisterDto } from './classes/register.dto';
import { IRegisterResponse } from './interfaces/responses';
import { JwtTokenType } from './models/jwt-token';
import { RegisterContract } from './queries/contracts/register.contract';

@Controller('auth')
export class AuthController {
	private readonly logger = new Logger(AuthController.name);

	constructor(private readonly queryBus: QueryBus, private readonly authService: AuthService) {}

	@Post('register')
	public async register(@Body() registerDto: RegisterDto): Promise<IRegisterResponse> {
		this.logger.log(
			`Will try to register a user with data email: "${registerDto.email}" and name: "${registerDto.name}"`,
		);

		const createdUserId = await this.queryBus.execute<RegisterContract, string>(
			new RegisterContract(registerDto),
		);

		this.logger.log(`Successfully created a user with Id: "${createdUserId}"`);

		const accessToken = this.authService.generateJwtToken(createdUserId, JwtTokenType.Access);
		const refreshToken = this.authService.generateJwtToken(createdUserId, JwtTokenType.Refresh);

		this.logger.log('Successfully generated both access and refresh tokens');

		return {
			accessToken,
			refreshToken,
		};
	}
}
