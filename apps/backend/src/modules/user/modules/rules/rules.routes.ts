const Routes = {
	CONTROLLER: 'rules',
	DELETE_RULE: ':rule_id',
	GET_RULES: ':policy_id',
	ENABLE_EXIST_RULE: 'enable/:rule_id',
	ENABLE_MISSING_RULE: 'enable/:policy_id',
	DISABLE_RULE: 'disable/:rule_id',
	UPDATE_CONFIGURATION: ':rule_id',
	CONFIGURE_MISSING: ':policy_id',
};

export default Routes;
