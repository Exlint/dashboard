import { IsString, MinLength } from 'class-validator';

export class EditLabelDto {
	@IsString()
	@MinLength(1)
	readonly label!: string;
}
