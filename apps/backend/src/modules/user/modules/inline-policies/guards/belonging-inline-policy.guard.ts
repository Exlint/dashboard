import { Injectable, type CanActivate, type ExecutionContext } from '@nestjs/common';

import type { IJwtTokenPayload } from '@/interfaces/jwt-token';
import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

@Injectable()
export class BelongingInlinePolicyGuard implements CanActivate {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const user = request.user as IJwtTokenPayload;
		const userId = user.sub;
		const inlinePolicyId = request.params.policy_id as string;

		const inlinePolicyBelongsUser = await this.dbInlinePolicyService.doesInlinePolicyBelongUser(
			inlinePolicyId,
			userId,
		);

		return inlinePolicyBelongsUser;
	}
}
