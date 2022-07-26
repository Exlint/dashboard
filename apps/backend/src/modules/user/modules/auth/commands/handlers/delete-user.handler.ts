import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';
import { UnauthorizedException } from '@nestjs/common';

import { DBUserService } from '@/modules/database/user.service';

import { DeleteUserContract } from '../contracts/delete-user.contract';
import { AuthService } from '../../auth.service';

@CommandHandler(DeleteUserContract)
export class DeleteUserHandler implements ICommandHandler<DeleteUserContract> {
	constructor(private readonly dbUserService: DBUserService, private readonly authService: AuthService) {}

	async execute(contract: DeleteUserContract) {
		const authData = await this.dbUserService.getAuthTypeData(contract.userId);

		if (!authData) {
			throw new UnauthorizedException();
		}

		// * - Won't delete and revoke refresh token in parallel - need to ensure revoke action completed successfully

		if (authData.authType === 'GITHUB') {
			await this.authService.revokeGithubToken(authData.externalToken!);
		} else if (authData.authType === 'GOOGLE') {
			await this.authService.revokeGoogleToken(authData.externalToken!);
		}

		await this.dbUserService.deleteUser(contract.userId);
	}
}
