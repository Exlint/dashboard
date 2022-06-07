import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

import { IJwtTokenPayload } from '@/interfaces/jwt-token';
import { DBGroupService } from '@/modules/database/group.service';

@Injectable()
export class BelongingGroupGuard implements CanActivate {
	constructor(private readonly dbGroupService: DBGroupService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const user = request.user as IJwtTokenPayload;
		const userId = user.sub;
		const groupId = request.params.group_id as string;

		const groupBelongsUser = await this.dbGroupService.doesGroupBelongUser(userId, groupId);

		return groupBelongsUser;
	}
}
