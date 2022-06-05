const Routes = {
	CONTROLLER: 'secrets',
	CREATE: 'create',
	DELETE: 'delete/:secret_id',
	REVOKE_ALL: 'revoke-all',
	REFRSH_SECRET: 'refresh-secret/:secret_id',
	EDIT_LABEL: 'edit-label/:secret_id',
};

export default Routes;
