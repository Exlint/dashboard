import { ApiProperty } from '@nestjs/swagger';
import { IsJSON } from 'class-validator';

export class UpdateConfigurationDto {
	@ApiProperty({ type: String, description: 'Stringified configuration object' })
	@IsJSON()
	readonly configuration!: string;
}
