export class EditDescriptionContract {
	constructor(public readonly complianceId: string, public readonly description: string | null) {}
}
