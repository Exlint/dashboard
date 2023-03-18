class CliBackendService {
	private static routesWithRefreshToken: string[] = [];

	private static async fetcher<R = unknown>(path: string) {
		const requestPath = import.meta.env.VITE_CLI_BACKEND_URL + path;
		const withRefresh = this.routesWithRefreshToken.includes(path);
		const token = withRefresh ? localStorage.getItem('token') : sessionStorage.getItem('token');

		const res = await fetch(requestPath, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (!res.ok) {
			throw new Error();
		}

		const resData = await res.json();

		return resData as R;
	}

	public static get<R = unknown>(path: string) {
		return this.fetcher<R>(path);
	}
}

export default CliBackendService;
