import { PolicyLibrary } from '@prisma/client';

export class CreateInlineContract {
	constructor(
		public readonly groupId: string,
		public readonly label: string,
		public readonly library: PolicyLibrary,
	) {}
}
