const Routes = {
	CONTROLLER: 'compliances',
	CREATE: '',
	EDIT_LABEL: 'label/:compliance_id',
	EDIT_DESCRIPTION: 'description/:compliance_id',
	DELETE: ':compliance_id',
	GET_ALL: '',
	AVAILABLE_LABEL: 'available/:label',
	GET: ':compliance_id',
	GET_INLINE_POLICIES: 'inline-policies/:compliance_id',
};

export default Routes;
