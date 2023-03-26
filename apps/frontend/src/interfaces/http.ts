export type IHttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export interface IRefreshTokenRoute {
	readonly method: IHttpMethod;
	readonly path: string;
}
