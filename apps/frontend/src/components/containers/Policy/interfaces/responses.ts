import type { ILibraryName } from '@/interfaces/libraries';

export interface IGetResponseData {
	readonly groupLabel: string;
	readonly policyLabel: string;
	readonly library: ILibraryName;
}
