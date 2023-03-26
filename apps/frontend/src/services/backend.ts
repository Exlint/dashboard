import { preload } from 'swr';

import type { IHttpMethod, IRefreshTokenRoute } from '@/interfaces/http';

class BackendService {
	private static routesWithRefreshToken: IRefreshTokenRoute[] = [
		{ method: 'GET', path: '/user/auth' },
		{ method: 'GET', path: '/user/auth/refresh-token' },
	];

	private static fetcher = async <R = unknown, D = unknown>(
		path: string,
		method: IHttpMethod,
		data?: D,
	) => {
		const endpointPath = import.meta.env.VITE_BACKEND_URL + path;

		const withRefresh = !!this.routesWithRefreshToken.find(
			(route) => route.method === method && route.path === path,
		);

		const token = (withRefresh ? localStorage : sessionStorage).getItem('token');

		const res = await fetch(endpointPath, {
			method,
			headers: {
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: data ? JSON.stringify(data) : undefined,
		});

		if (!res.ok) {
			throw new Error();
		}

		const resData = await res.json().catch(() => undefined);

		return resData as R;
	};

	public static get = <R = unknown>(path: string) => {
		return this.fetcher<R, null>(path, 'GET');
	};

	public static post = <R = unknown, D = unknown>(path: string, data?: D) => {
		return this.fetcher<R, D>(path, 'POST', data);
	};

	public static patch = <R = unknown, D = unknown>(path: string, data?: D) => {
		return this.fetcher<R, D>(path, 'PATCH', data);
	};

	public static delete = <R = unknown>(path: string) => {
		return this.fetcher<R, null>(path, 'DELETE');
	};

	public static preload = (path: string) => {
		return preload(path, this.get);
	};
}

export default BackendService;
