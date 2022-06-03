import crypto from 'crypto';

import { Injectable } from '@nestjs/common';

@Injectable()
export class SecretsService {
	public generateSecret() {
		const secret = crypto.randomUUID();

		return secret;
	}
}
