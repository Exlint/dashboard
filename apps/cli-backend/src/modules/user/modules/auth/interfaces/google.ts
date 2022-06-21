import { IUnknown } from './unknown';

interface IGoogleEmail {
	readonly value: string;
}

export interface IGoogleProfile extends IUnknown {
	readonly emails: IGoogleEmail[];
}
