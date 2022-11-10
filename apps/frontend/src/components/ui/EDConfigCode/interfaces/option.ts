import type { CodeType } from '@prisma/client';

export interface IOption {
	readonly value: CodeType;
	readonly label: string;
}
