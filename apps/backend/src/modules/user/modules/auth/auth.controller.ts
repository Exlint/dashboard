import { Body, Controller, HttpCode, HttpStatus, Logger, Post, UseGuards } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { User } from '@prisma/client';

import { Public } from '@/decorators/public.decorator';
import { CurrentUser } from '@/decorators/current-user.decorator';

import { AuthService } from './auth.service';
import { LoginDto } from './classes/login.dto';
import { RegisterDto } from './classes/register.dto';
import { ILoginResponse, IRegisterResponse } from './interfaces/responses';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RegisterContract } from './queries/contracts/register.contract';

@Controller('auth')
export class AuthController {
	private readonly logger = new Logger(AuthController.name);

	constructor(private readonly queryBus: QueryBus, private readonly authService: AuthService) {}

	@Public()
	@Post('register')
	@HttpCode(HttpStatus.CREATED)
	public async register(@Body() registerDto: RegisterDto): Promise<IRegisterResponse> {
		this.logger.log(
			`Will try to register a user with data email: "${registerDto.email}" and name: "${registerDto.name}"`,
		);

		const createdUserId = await this.queryBus.execute<RegisterContract, string>(
			new RegisterContract(registerDto),
		);

		this.logger.log(`Successfully created a user with Id: "${createdUserId}"`);

		const [accessToken, refreshToken] = await this.authService.generateJwtTokens(
			createdUserId,
			registerDto.email,
		);

		this.logger.log('Successfully generated both access and refresh tokens');

		return {
			accessToken,
			refreshToken,
		};
	}

	@Public()
	@UseGuards(LocalAuthGuard)
	@Post('login')
	@HttpCode(HttpStatus.OK)
	public async login(
		@Body() loginDto: LoginDto,
		@CurrentUser() user: Pick<User, 'id' | 'name'>,
	): Promise<ILoginResponse> {
		this.logger.log(`Will try to login with data email: "${loginDto.email}"`);

		const [accessToken, refreshToken] = await this.authService.generateJwtTokens(user.id, loginDto.email);

		this.logger.log('Successfully generated both access and refresh tokens');

		return {
			accessToken,
			refreshToken,
			name: user.name,
		};
	}
}
