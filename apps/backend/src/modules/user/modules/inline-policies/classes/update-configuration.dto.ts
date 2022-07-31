import { ApiProperty } from '@nestjs/swagger';
import { IsJSON } from 'class-validator';

export class UpdateConfigurationDto {
	@ApiProperty({
		type: String,
		description: 'Stringified configuration object',
		example: JSON.stringify({ yazifConfig1: 'yazif', yazifConfig2: 'yazifos' }),
	})
	@IsJSON()
	readonly configuration!: string;
}
