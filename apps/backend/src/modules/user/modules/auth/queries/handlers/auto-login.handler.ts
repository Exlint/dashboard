import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { AutoLoginContract } from '../contracts/auto-login.contract';

@QueryHandler(AutoLoginContract)
export class AutoLoginHandler implements IQueryHandler<AutoLoginContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	async execute(contract: AutoLoginContract) {
		const userData = await this.dbUserService.findByEmail(contract.email, {
			id: true,
			name: true,
			clientSecrets: {
				select: {
					id: true,
					label: true,
					expiration: true,
					createdAt: true,
				},
			},
		});

		return userData;
	}
}
