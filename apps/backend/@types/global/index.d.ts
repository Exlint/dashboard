declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly NODE_ENV?: string;
			readonly JWT_KEY?: string;
		}
	}
}

export {};
