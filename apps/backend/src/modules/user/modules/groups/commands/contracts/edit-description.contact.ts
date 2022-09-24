export class EditDescriptionContract {
	constructor(public readonly groupId: string, public readonly description: string | null) {}
}
