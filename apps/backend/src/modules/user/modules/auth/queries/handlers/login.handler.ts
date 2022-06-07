import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { LoginContract } from '../contracts/login.contract';

@QueryHandler(LoginContract)
export class LoginHandler implements IQueryHandler<LoginContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	async execute(contract: LoginContract) {
		const userData = await this.dbUserService.findByEmail(contract.email, {
			passwordHash: true,
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
			groups: {
				select: {
					id: true,
					label: true,
					createdAt: true,
					inlinePolicies: {
						select: {
							id: true,
							label: true,
							library: true,
							configuration: true,
							rules: true,
						},
					},
				},
			},
		});

		return userData;
	}
}
