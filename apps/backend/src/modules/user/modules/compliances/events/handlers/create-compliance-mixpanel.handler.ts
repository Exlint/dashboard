import { ConfigService } from '@nestjs/config';
import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';
import Mixpanel from 'mixpanel';

import type { IEnvironment } from '@/config/env.interface';

import { CreateComplianceMixpanelContract } from '../contracts/create-compliance-mixpanel.contract';
import { COMPLIANCE_CREATE } from '../../models/mixpanel-events';

@CommandHandler(CreateComplianceMixpanelContract)
export class CreateComplianceMixpanelHandler implements ICommandHandler<CreateComplianceMixpanelContract> {
	constructor(private readonly configService: ConfigService<IEnvironment, true>) {}

	public execute(contract: CreateComplianceMixpanelContract): Promise<void> {
		const mixpanel = Mixpanel.init(this.configService.get('mixpanelToken', { infer: true }));

		mixpanel.track(COMPLIANCE_CREATE, {
			distinct_id: contract.userId,
			ip: contract.ip,
		});

		return Promise.resolve();
	}
}
