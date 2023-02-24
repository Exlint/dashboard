declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly AUTOMATION?: 'true';
		}
	}
}

export {};
