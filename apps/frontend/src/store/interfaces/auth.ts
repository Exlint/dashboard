export interface IAuthState {
	isAuthenticated: boolean | null;
	id: string | null;
	name: string | null;
	createdAt: number | null;
}

export interface IAuthPayload {
	id: string;
	name: string;
	createdAt: number;
}
