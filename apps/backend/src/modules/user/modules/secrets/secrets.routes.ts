const Routes = {
	CONTROLLER: 'secrets',
	CREATE: '',
	DELETE: ':secret_id',
	REVOKE_ALL: 'all',
	REFRSH_SECRET: 'refresh-secret/:secret_id',
	EDIT_LABEL: 'edit-label/:secret_id',
	GET_ALL: '',
};

export default Routes;
