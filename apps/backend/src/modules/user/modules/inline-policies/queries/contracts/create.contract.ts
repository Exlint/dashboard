import type { PolicyLibrary } from '@prisma/client';

export class CreateContract {
	constructor(
		public readonly userId: string,
		public readonly groupId: string,
		public readonly label: string,
		public readonly description: string | null,
		public readonly library: PolicyLibrary,
		public readonly ip: string,
	) {}
}
