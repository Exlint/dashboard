import { ConfigService } from '@nestjs/config';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Mixpanel from 'mixpanel';

import { IEnvironment } from '@/config/env.interface';

import { USER_LOGIN } from '../../models/mixpanel-events';
import { LoginMixpanelContract } from '../contracts/login-mixpanel.contract';

@CommandHandler(LoginMixpanelContract)
export class LoginMixpanelHandler implements ICommandHandler<LoginMixpanelContract> {
	constructor(private readonly configService: ConfigService<IEnvironment, true>) {}

	execute(contract: LoginMixpanelContract): Promise<void> {
		const mixpanel = Mixpanel.init(this.configService.get('mixpanelToken', { infer: true }));

		mixpanel.track(USER_LOGIN, {
			distinct_id: contract.userId,
			ip: contract.ip,
		});

		return Promise.resolve();
	}
}
