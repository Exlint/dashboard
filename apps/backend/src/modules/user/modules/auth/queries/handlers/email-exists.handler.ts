import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { DBUserService } from '@/modules/database/user.service';

import { EmailExistsContract } from '../contracts/email-exists.contract';

@QueryHandler(EmailExistsContract)
export class EmailExistsHandler implements IQueryHandler<EmailExistsContract> {
	constructor(private readonly dbUserService: DBUserService) {}

	execute(contract: EmailExistsContract) {
		return this.dbUserService.emailExists(contract.email);
	}
}
