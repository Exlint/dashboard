import { AvailableLabelHandler } from './available-label.handler';
import { CreateHandler } from './create.handler';
import { GetCodeConfigurationHandler } from './get-code-configuration.handler';
import { GetFilesListHandler } from './get-files-list.handler';
import { GetFormSchemaHandler } from './get-form-schema.handler';
import { GetPolicyRulesHandler } from './get-policy-rules.handler';
import { GetHandler } from './get.handler';
import { ComplianceHasLibraryHandler } from './compliance-has-library.handler';
import { UserComplianceLibrariesHandler } from './user-compliance-libraries.handler';

export const QueryHandlers = [
	AvailableLabelHandler,
	UserComplianceLibrariesHandler,
	ComplianceHasLibraryHandler,
	CreateHandler,
	GetHandler,
	GetFilesListHandler,
	GetCodeConfigurationHandler,
	GetFormSchemaHandler,
	GetPolicyRulesHandler,
];
