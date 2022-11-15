import { BadRequestException, Injectable, type CanActivate, type ExecutionContext } from '@nestjs/common';

import { librariesData } from '@/data/libraries-data';

import type { IJwtTokenPayload } from '../interfaces/jwt-token';
import { DBInlinePolicyService } from '../modules/database/inline-policy.service';

@Injectable()
export class RuleablePolicyGuard implements CanActivate {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const user = request.user as IJwtTokenPayload;
		const userId = user.sub;
		const inlinePolicyId = request.params.policy_id as string;

		const policyLibrary = await this.dbInlinePolicyService.getPolicyLibrary(inlinePolicyId, userId);
		const matchingLibraryData = librariesData.find((library) => library.name === policyLibrary)!;

		if (Object.keys(matchingLibraryData.rules ?? {}).length === 0) {
			throw new BadRequestException();
		}

		request.policyLibrary = policyLibrary;

		return true;
	}
}
