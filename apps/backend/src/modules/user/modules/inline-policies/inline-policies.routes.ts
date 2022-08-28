const Routes = {
	CONTROLLER: 'inline-policies',
	CREATE: ':group_id',
	DELETE: ':policy_id',
	UPDATE_CONFIGURATION: ':policy_id',
	ADD_RULE: 'add-rule/:policy_id',
	EDIT_RULE: 'edit-rule/:policy_id',
	REMOVE_RULE: 'remove-rule/:policy_id',
	GET_CONFIGURATION: 'configuration/:policy_id',
	GET_RULES: 'rules/:policy_id',
	GET: ':policy_id',
};

export default Routes;
