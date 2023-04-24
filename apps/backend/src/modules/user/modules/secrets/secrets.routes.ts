const Routes = {
	CONTROLLER: 'secrets',
	CREATE: '',
	DELETE: ':secret_id',
	REVOKE_ALL: '',
	REFRESH_SECRET: 'refresh-secret/:secret_id',
	EDIT_LABEL: 'edit-label/:secret_id',
	GET_ALL: '',
	AVAILABLE_LABEL: ':label',
};

export default Routes;
