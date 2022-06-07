export class UpdateConfigurationContract {
	constructor(public readonly policyId: string, public readonly configuration: string) {}
}
