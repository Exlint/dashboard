import { ConfigService } from '@nestjs/config';
import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';
import Mixpanel from 'mixpanel';

import type { IEnvironment } from '@/config/env.interface';

import { CreateGroupMixpanelContract } from '../contracts/create-group-mixpanel.contract';
import { GROUP_CREATE } from '../../models/mixpanel-events';

@CommandHandler(CreateGroupMixpanelContract)
export class CreateGroupMixpanelHandler implements ICommandHandler<CreateGroupMixpanelContract> {
	constructor(private readonly configService: ConfigService<IEnvironment, true>) {}

	execute(contract: CreateGroupMixpanelContract): Promise<void> {
		const mixpanel = Mixpanel.init(this.configService.get('mixpanelToken', { infer: true }));

		mixpanel.track(GROUP_CREATE, {
			distinct_id: contract.userId,
			ip: contract.ip,
		});

		return Promise.resolve();
	}
}
