import { AvailableLabelHandler } from './available-label.handler';
import { CreateComplianceHandler } from './create-compliance.handler';
import { GetAllCompliancesHandler } from './get-all-compliances.handler';
import { GetComplianceHandler } from './get-compliance.handler';
import { GetInlinePoliciesHandler } from './get-inline-policies.handler';

export const QueryHandlers = [
	CreateComplianceHandler,
	GetAllCompliancesHandler,
	AvailableLabelHandler,
	GetComplianceHandler,
	GetInlinePoliciesHandler,
];
