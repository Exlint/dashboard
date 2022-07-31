import { ApiProperty } from '@nestjs/swagger';
import { IsJSON } from 'class-validator';

export class AddRuleDto {
	@ApiProperty({
		type: String,
		description: 'Stringified rules object',
		example: JSON.stringify({ yazifRule: 'error' }),
	})
	@IsJSON()
	readonly rule!: string;
}
