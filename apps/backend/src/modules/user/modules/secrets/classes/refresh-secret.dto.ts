import { IsString } from 'class-validator';

export class RefreshSecretDto {
	@IsString()
	readonly secretId!: string;
}
