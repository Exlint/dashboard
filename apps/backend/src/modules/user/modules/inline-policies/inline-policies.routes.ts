const Routes = {
	CONTROLLER: 'inline-policies',
	CREATE: ':group_id',
	AVAILABLE_LABEL: 'available/:label',
	GET_LIBRARIES: 'libraries/:group_id',
	GET: ':policy_id',
	EDIT_LABEL: 'label/:policy_id',
	DELETE: ':policy_id',
	SET_FILE_LIST: 'files-list/:policy_id',
	GET_FILE_LIST: 'files-list/:policy_id/:files_list_type',
	GET_CODE_CONFIGURATION: 'code-configuration/:policy_id',
	SET_CODE_CONFIGURATION: 'code-configuration/:policy_id',
	GET_FORM_CONFIGURATION: 'form-configuration/:policy_id',
	GET_FORM_SCHEMA: 'form-schema/:policy_id',
	SET_IS_FORM_CONFIGURATION: 'is-form-configuration/:policy_id',
	GET_POLICY_RULES: 'rules/:policy_id',
	EDIT_DESCRIPTION: 'description/:policy_id',
};

export default Routes;
