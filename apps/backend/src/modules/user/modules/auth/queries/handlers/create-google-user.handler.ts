import { EventBus, IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { CreateGoogleUserContract } from '../contracts/create-google-user.contract';
import { SignupMixpanelContract } from '../../events/contracts/signup-mixpanel.contract';

@QueryHandler(CreateGoogleUserContract)
export class CreateGoogleUserHandler implements IQueryHandler<CreateGoogleUserContract> {
	constructor(private readonly dbUserService: DBUserService, private readonly eventBus: EventBus) {}

	async execute(contract: CreateGoogleUserContract) {
		const createdUser = await this.dbUserService.createUser({
			email: contract.data.email,
			name: contract.data.name,
			externalToken: contract.data.refreshToken,
			authType: 'GOOGLE',
		});

		this.eventBus.publish(new SignupMixpanelContract(createdUser.id, contract.data.ip));

		return createdUser.id;
	}
}
