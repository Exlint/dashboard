import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { UserComplianceLibrariesContract } from '../contracts/user-compliance-libraries.contract';

@QueryHandler(UserComplianceLibrariesContract)
export class UserComplianceLibrariesHandler implements IQueryHandler<UserComplianceLibrariesContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	public async execute(contract: UserComplianceLibrariesContract) {
		const records = await this.dbInlinePolicyService.getUserComplianceLibraries(contract.complianceId);

		return records.map((record) => record.library);
	}
}
