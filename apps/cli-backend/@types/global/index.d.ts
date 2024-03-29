declare global {
	const __PACKAGE_VERSION__: string;

	namespace NodeJS {
		interface ProcessEnv {
			readonly NODE_ENV: 'development' | 'test' | 'production';
			readonly PORT: string;
			readonly FRONTEND_URL: string;
			readonly CLI_TOKEN_JWT_KEY: string;
			readonly REFRESH_TOKEN_JWT_KEY: string;
			readonly GOOGLE_OAUTH_CLIENT_ID: string;
			readonly GOOGLE_OAUTH_CLIENT_SECRET: string;
			readonly GOOGLE_OAUTH_REDIRECT_URI: string;
			readonly GH_OAUTH_CLIENT_ID: string;
			readonly GH_OAUTH_CLIENT_SECRET: string;
			readonly GITHUB_OAUTH_REDIRECT_URI: string;
			readonly MIXPANEL_TOKEN: string;
		}
	}
}

export {};
