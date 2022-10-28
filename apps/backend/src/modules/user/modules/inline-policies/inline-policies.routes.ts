const Routes = {
	CONTROLLER: 'inline-policies',
	CREATE: ':group_id',
	AVAILABLE_LABEL: 'available/:label',
	GET_LIBRARIES: 'libraries/:group_id',
	GET: ':policy_id',
	EDIT_LABEL: 'label/:policy_id',
	DELETE: ':policy_id',
	SET_FILE_LIST: 'file-list/:policy_id',
	GET_FILE_LIST: 'file-list/:policy_id/:file_list_type',
	GET_CONFIGURATION: 'configuration/:policy_id',
	SET_CODE_CONFIGURATION: 'code-configuration/:policy_id',
};

export default Routes;
