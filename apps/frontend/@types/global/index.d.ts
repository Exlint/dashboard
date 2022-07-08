declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly REACT_APP_BACKEND_URL: string;
		}
	}
}

export {};
