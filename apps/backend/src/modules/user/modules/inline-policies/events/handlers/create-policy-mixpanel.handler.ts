import { ConfigService } from '@nestjs/config';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Mixpanel from 'mixpanel';

import { IEnvironment } from '@/config/env.interface';

import { CreatePolicyMixpanelContract } from '../contracts/create-policy-mixpanel.contract';
import { INLINE_POLICY_CREATE } from '../../models/mixpanel-events';

@CommandHandler(CreatePolicyMixpanelContract)
export class CreatePolicyMixpanelHandler implements ICommandHandler<CreatePolicyMixpanelContract> {
	constructor(private readonly configService: ConfigService<IEnvironment, true>) {}

	execute(contract: CreatePolicyMixpanelContract): Promise<void> {
		const mixpanel = Mixpanel.init(this.configService.get('mixpanelToken', { infer: true }));

		mixpanel.track(INLINE_POLICY_CREATE, {
			distinct_id: contract.userId,
			ip: contract.ip,
		});

		return Promise.resolve();
	}
}
