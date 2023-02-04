declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly AUTOMATION_GITHUB_EMAIL: string;
			readonly AUTOMATION_GITHUB_PASSWORD: string;
			readonly AUTOMATION_GITHUB_TOTP_KEY: string;
		}
	}
}

export {};
