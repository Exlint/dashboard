import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { ComplianceHasLibraryContract } from '../contracts/compliance-has-library.contract';

@QueryHandler(ComplianceHasLibraryContract)
export class ComplianceHasLibraryHandler implements IQueryHandler<ComplianceHasLibraryContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	execute(contract: ComplianceHasLibraryContract) {
		return this.dbInlinePolicyService.complianceHasLibrary(contract.complianceId, contract.library);
	}
}
