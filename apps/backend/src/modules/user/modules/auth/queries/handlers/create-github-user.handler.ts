import { EventBus, IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { CreateGithubUserContract } from '../contracts/create-github-user.contract';
import { SignupMixpanelContract } from '../../events/contracts/signup-mixpanel.contract';

@QueryHandler(CreateGithubUserContract)
export class CreateGithubUserHandler implements IQueryHandler<CreateGithubUserContract> {
	constructor(private readonly dbUserService: DBUserService, private readonly eventBus: EventBus) {}

	async execute(contract: CreateGithubUserContract) {
		const createdUser = await this.dbUserService.createUser({
			email: contract.data.email,
			name: contract.data.name,
			authType: 'GITHUB',
			externalToken: contract.data.accessToken,
		});

		this.eventBus.publish(new SignupMixpanelContract(createdUser.id, contract.data.ip));

		return createdUser.id;
	}
}
