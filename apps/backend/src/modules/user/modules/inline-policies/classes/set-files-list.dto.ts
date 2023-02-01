import { FilesListType, type ISetFilesListDto } from '@exlint.io/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString, MaxLength } from 'class-validator';

export class SetFilesListDto implements ISetFilesListDto {
	@ApiProperty({ type: String, description: 'File list', example: '**/*.js\\n**/*.ts' })
	@IsString()
	@MaxLength(1000)
	readonly filesList!: string;

	@ApiProperty({ enum: ['linted', 'ignored'], description: 'The file list type' })
	@IsIn(['linted', 'ignored'])
	readonly type!: FilesListType;
}
