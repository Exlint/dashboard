import { Injectable, type CanActivate, type ExecutionContext } from '@nestjs/common';

import type { IJwtTokenPayload } from '@/interfaces/jwt-token';
import { DBComplianceService } from '@/modules/database/compliance.service';

interface IGuardRequest {
	readonly user: IJwtTokenPayload;
	readonly params: {
		readonly compliance_id: string;
	};
}

@Injectable()
export class BelongingComplianceGuard implements CanActivate {
	constructor(private readonly dbComplianceService: DBComplianceService) {}

	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest<IGuardRequest>();
		const user = request.user;
		const userId = user.sub;
		const complianceId = request.params.compliance_id;

		const complianceBelongsUser = await this.dbComplianceService.doesComplianceBelongUser(
			userId,
			complianceId,
		);

		return complianceBelongsUser;
	}
}
