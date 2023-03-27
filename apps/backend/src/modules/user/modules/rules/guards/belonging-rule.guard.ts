import { Injectable, type CanActivate, type ExecutionContext } from '@nestjs/common';

import type { IJwtTokenPayload } from '@/interfaces/jwt-token';
import { DBRuleService } from '@/modules/database/rule.service';

@Injectable()
export class BelongingRuleGuard implements CanActivate {
	constructor(private readonly dbRuleService: DBRuleService) {}

	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const user = request.user as IJwtTokenPayload;
		const userId = user.sub;
		const ruleId = request.params.rule_id as string;

		const inlinePolicyBelongsUser = await this.dbRuleService.doesRuleBelongUser(ruleId, userId);

		return inlinePolicyBelongsUser;
	}
}
