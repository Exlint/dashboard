declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly NODE_ENV: 'development' | 'production';
			readonly PORT: string;
			readonly JWT_KEY: string;
			readonly GOOGLE_OAUTH_CLIENT_ID: string;
			readonly GOOGLE_OAUTH_CLIENT_SECRET: string;
			readonly GOOGLE_OAUTH_REDIRECT_URI: string;
			readonly GITHUB_OAUTH_CLIENT_ID: string;
			readonly GITHUB_OAUTH_CLIENT_SECRET: string;
			readonly GITHUB_OAUTH_REDIRECT_URI: string;
		}
	}
}

export {};
