import { PolicyLibrary } from '@/models/policy-library';

export class CreateInlineContract {
	constructor(
		public readonly groupId: string,
		public readonly label: string,
		public readonly library: PolicyLibrary,
	) {}
}
