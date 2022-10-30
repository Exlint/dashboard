import type { CodeType } from '@/models/code-type';

export interface IGetCodeConfigurationResponseData {
	readonly codeConfiguration: string | null;
	readonly codeType: CodeType | null;
}
