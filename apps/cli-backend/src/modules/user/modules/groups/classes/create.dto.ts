import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum } from 'class-validator';

import { Language } from '@/models/languages';

export class RecommendedDto {
	@ApiProperty({
		type: [String],
		description: 'The languages to get recommendations for',
		example: ['JavaScript', 'Python'],
	})
	@IsArray()
	@IsEnum(Language, { each: true })
	readonly languages!: Language[];
}
