import type { Secret } from '@prisma/client';

export interface ISecretItem extends Pick<Secret, 'id' | 'label'> {
	readonly expiration: number | null;
}
