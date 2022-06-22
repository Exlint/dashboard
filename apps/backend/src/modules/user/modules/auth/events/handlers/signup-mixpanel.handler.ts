import { ConfigService } from '@nestjs/config';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Mixpanel from 'mixpanel';

import { IEnvironment } from '@/config/env.interface';

import { SignupMixpanelContract } from '../contracts/signup-mixpanel.contract';
import { USER_SIGNUP } from '../../models/mixpanel-events';

@CommandHandler(SignupMixpanelContract)
export class SignupMixpanelHandler implements ICommandHandler<SignupMixpanelContract> {
	constructor(private readonly configService: ConfigService<IEnvironment, true>) {}

	execute(contract: SignupMixpanelContract): Promise<void> {
		const mixpanel = Mixpanel.init(this.configService.get('mixpanelToken', { infer: true }));

		mixpanel.track(USER_SIGNUP, {
			distinct_id: contract.userId,
			ip: contract.ip,
		});

		return Promise.resolve();
	}
}
