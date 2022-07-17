import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { ValidRefreshTokenContract } from '../contracts/valid-refresh-token.contract';

@QueryHandler(ValidRefreshTokenContract)
export class ValidRefreshTokenHandler implements IQueryHandler<ValidRefreshTokenContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	async execute(contract: ValidRefreshTokenContract) {
		const isValidRefreshToken = await this.dbUserService.isRefreshTokenValid(
			contract.userId,
			contract.token,
		);

		return isValidRefreshToken;
	}
}
