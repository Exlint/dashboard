import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { GetGoogleUserContract } from '../contracts/get-google-user.contract';

@QueryHandler(GetGoogleUserContract)
export class GetGoogleUserHandler implements IQueryHandler<GetGoogleUserContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	public async execute(contract: GetGoogleUserContract) {
		const userData = await this.dbUserService.findExternalUserByEmail(contract.email);

		return userData;
	}
}
