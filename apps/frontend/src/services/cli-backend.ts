import type { IHttpMethod, IRefreshTokenRoute } from '@/interfaces/http';

class CliBackendService {
	private static routesWithRefreshToken: IRefreshTokenRoute[] = [
		{ method: 'GET', path: '/user/auth/auth' },
	];

	private static fetcher = async <R = unknown, D = unknown>(
		path: string,
		method: IHttpMethod,
		data?: D,
	) => {
		const endpointPath = import.meta.env.VITE_CLI_BACKEND_URL + path;

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
		return this.fetcher<R>(path, 'GET');
	};
}

export default CliBackendService;
