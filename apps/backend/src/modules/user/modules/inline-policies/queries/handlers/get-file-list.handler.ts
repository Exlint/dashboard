import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { GetFileListContract } from '../contracts/get-file-list.contract';

@QueryHandler(GetFileListContract)
export class GetFileListHandler implements IQueryHandler<GetFileListContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	execute(contract: GetFileListContract) {
		return this.dbInlinePolicyService.getFileList(contract.policyId, contract.type);
	}
}
