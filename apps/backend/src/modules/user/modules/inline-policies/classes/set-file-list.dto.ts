import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, MaxLength } from 'class-validator';

import { FileListType } from '@/models/file-list';

export class SetFileListDto {
	@ApiProperty({ type: String, description: 'File list', example: '**/*.js\\n**/*.ts' })
	@IsString()
	@MaxLength(1000)
	readonly fileList!: string;

	@ApiProperty({ enum: FileListType, description: 'The file list type' })
	@IsEnum(FileListType)
	readonly type!: FileListType;
}
