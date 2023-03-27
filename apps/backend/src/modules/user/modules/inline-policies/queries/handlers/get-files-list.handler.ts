import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { GetFilesListContract } from '../contracts/get-files-list.contract';

@QueryHandler(GetFilesListContract)
export class GetFilesListHandler implements IQueryHandler<GetFilesListContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	public execute(contract: GetFilesListContract) {
		return this.dbInlinePolicyService.getFilesList(contract.policyId, contract.type);
	}
}
