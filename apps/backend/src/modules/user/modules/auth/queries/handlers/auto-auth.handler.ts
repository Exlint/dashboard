import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { AutoAuthContract } from '../contracts/auto-auth.contract';

@QueryHandler(AutoAuthContract)
export class AutoLoginHandler implements IQueryHandler<AutoAuthContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	async execute(contract: AutoAuthContract) {
		const userData = await this.dbUserService.findByEmail(contract.email, {
			id: true,
			name: true,
		});

		return userData;
	}
}
