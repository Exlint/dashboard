export class EditDescriptionContract {
	constructor(public readonly policyId: string, public readonly description: string | null) {}
}
