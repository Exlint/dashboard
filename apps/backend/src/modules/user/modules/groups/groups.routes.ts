const Routes = {
	CONTROLLER: 'groups',
	CREATE: '',
	EDIT_LABEL: 'label/:group_id',
	EDIT_DESCRIPTION: 'description/:group_id',
	DELETE: ':group_id',
	GET_ALL: '',
	AVAILABLE_LABEL: 'available/:label',
	GET: ':group_id',
	GET_INLINE_POLICIES: 'inline-policies/:group_id',
};

export default Routes;
