import { ConfigService } from '@nestjs/config';
import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';
import Mixpanel from 'mixpanel';

import type { IEnvironment } from '@/config/env.interface';

import { CreateRuleMixpanelContract } from '../contracts/create-rule-mixpanel.contract';
import { RULE_CREATE } from '../../models/mixpanel-events';

@CommandHandler(CreateRuleMixpanelContract)
export class CreateRuleMixpanelHandler implements ICommandHandler<CreateRuleMixpanelContract> {
	constructor(private readonly configService: ConfigService<IEnvironment, true>) {}

	execute(contract: CreateRuleMixpanelContract): Promise<void> {
		const mixpanel = Mixpanel.init(this.configService.get('mixpanelToken', { infer: true }));

		mixpanel.track(RULE_CREATE, {
			distinct_id: contract.userId,
			ip: contract.ip,
		});

		return Promise.resolve();
	}
}
