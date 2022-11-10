import { QueryHandler, type IQueryHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { GetFormSchemaContract } from '../contracts/get-form-schema.contract';

@QueryHandler(GetFormSchemaContract)
export class GetFormSchemaHandler implements IQueryHandler<GetFormSchemaContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	execute(contract: GetFormSchemaContract) {
		return this.dbInlinePolicyService.getFormSchema(contract.policyId);
	}
}
