import { AddRuleHandler } from './add-rule.handler';
import { DeleteInlineHandler } from './delete-inline.handler';
import { RemoveRuleHandler } from './remove-rule.handler';
import { UpdateConfigurationHandler } from './update-configuration.handler';

export const CommandHandlers = [
	DeleteInlineHandler,
	UpdateConfigurationHandler,
	AddRuleHandler,
	RemoveRuleHandler,
];
