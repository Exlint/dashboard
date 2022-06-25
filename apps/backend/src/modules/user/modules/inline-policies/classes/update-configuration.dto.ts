import { IsJSON } from 'class-validator';

export class UpdateConfigurationDto {
	@IsJSON()
	readonly configuration!: string;
}
