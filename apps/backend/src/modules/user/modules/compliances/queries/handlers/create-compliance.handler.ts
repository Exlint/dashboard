import { EventBus, QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBComplianceService } from '@/modules/database/compliance.service';

import { CreateComplianceContract } from '../contracts/create-compliance.contact';
import { CreateComplianceMixpanelContract } from '../../events/contracts/create-compliance-mixpanel.contract';

@QueryHandler(CreateComplianceContract)
export class CreateComplianceHandler implements IQueryHandler<CreateComplianceContract> {
	constructor(
		private readonly dbComplianceService: DBComplianceService,
		private readonly eventBus: EventBus,
	) {}

	async execute(contract: CreateComplianceContract) {
		const createdComplianceId = await this.dbComplianceService.createCompliance(
			contract.userId,
			contract.label,
			contract.description,
		);

		this.eventBus.publish(new CreateComplianceMixpanelContract(contract.userId, contract.ip));

		return createdComplianceId;
	}
}
