import { Injectable, type CanActivate, type ExecutionContext } from '@nestjs/common';

import type { IJwtTokenPayload } from '@/interfaces/jwt-token';
import { DBClientSecretService } from '@/modules/database/client-secret.service';

@Injectable()
export class BelongingSecretGuard implements CanActivate {
	constructor(private readonly dbClientSecretService: DBClientSecretService) {}

	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const user = request.user as IJwtTokenPayload;
		const userId = user.sub;
		const secretId = request.params.secret_id as string;

		const secretsBelongUser = await this.dbClientSecretService.doesSecretBelongUser(userId, secretId);

		return secretsBelongUser;
	}
}
