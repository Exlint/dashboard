import { ConfigService } from '@nestjs/config';
import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';
import Mixpanel from 'mixpanel';

import type { IEnvironment } from '@/config/env.interface';

import { CreateMixpanelContract } from '../contracts/create-mixpanel.contract';
import { INLINE_POLICY_CREATE } from '../../models/mixpanel-events';

@CommandHandler(CreateMixpanelContract)
export class CreateMixpanelHandler implements ICommandHandler<CreateMixpanelContract> {
	constructor(private readonly configService: ConfigService<IEnvironment, true>) {}

	public execute(contract: CreateMixpanelContract): Promise<void> {
		const mixpanel = Mixpanel.init(this.configService.get('mixpanelToken', { infer: true }));

		mixpanel.track(INLINE_POLICY_CREATE, {
			distinct_id: contract.userId,
			ip: contract.ip,
		});

		return Promise.resolve();
	}
}
