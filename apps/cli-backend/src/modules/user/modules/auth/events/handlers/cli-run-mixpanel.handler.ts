import { ConfigService } from '@nestjs/config';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import Mixpanel from 'mixpanel';

import { IEnvironment } from '@/config/env.interface';

import { CliRunMixpanelContract } from '../contracts/cli-run-mixpanel.contract';
import { CLI_RUN } from '../../models/mixpanel-events';

@CommandHandler(CliRunMixpanelContract)
export class CliRunMixpanelHandler implements ICommandHandler<CliRunMixpanelContract> {
	constructor(private readonly configService: ConfigService<IEnvironment, true>) {}

	execute(contract: CliRunMixpanelContract): Promise<void> {
		const mixpanel = Mixpanel.init(this.configService.get('mixpanelToken', { infer: true }));

		mixpanel.track(CLI_RUN, {
			distinct_id: contract.userId,
			ip: contract.ip,
		});

		return Promise.resolve();
	}
}
