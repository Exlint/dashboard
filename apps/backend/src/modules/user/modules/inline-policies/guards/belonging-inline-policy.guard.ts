import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

import { IJwtTokenPayload } from '@/interfaces/jwt-token';
import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

@Injectable()
export class BelongingInlinePolicyGuard implements CanActivate {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const user = request.user as IJwtTokenPayload;
		const userId = user.sub;
		const inlinePolicyId = request.params.policy_id as string;

		const groupBelongUser = await this.dbInlinePolicyService.doesInlinePolicyBelongUser(
			userId,
			inlinePolicyId,
		);

		return groupBelongUser;
	}
}
