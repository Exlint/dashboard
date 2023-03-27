import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBComplianceService } from '@/modules/database/compliance.service';

import { GetComplianceContract } from '../contracts/get-compliance.contract';
import type { IGetComplianceResponseData } from '../../interfaces/responses';

@QueryHandler(GetComplianceContract)
export class GetComplianceHandler implements IQueryHandler<GetComplianceContract> {
	constructor(private readonly dbComplianceService: DBComplianceService) {}

	public async execute(contract: GetComplianceContract): Promise<IGetComplianceResponseData> {
		const complianceData = await this.dbComplianceService.getCompliance(contract.complianceId);

		return complianceData.inlinePolicies.map((inlinePolicy) => {
			const formConfiguration = inlinePolicy.isFormConfiguration
				? inlinePolicy.formConfiguration
				: null;

			const codeConfiguration = inlinePolicy.isFormConfiguration
				? null
				: inlinePolicy.codeConfiguration;

			return {
				...inlinePolicy,
				formConfiguration,
				codeConfiguration,
				rules: inlinePolicy.rules
					.filter((rule) => rule.isEnabled)
					.map((rule) => ({ ...rule, isEnabled: undefined })),
			};
		});
	}
}
