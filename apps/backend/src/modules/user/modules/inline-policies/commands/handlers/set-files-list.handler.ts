import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { SetFilesListContract } from '../contracts/set-files-list.contract';

@CommandHandler(SetFilesListContract)
export class SetFilesListHandler implements ICommandHandler<SetFilesListContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: SetFilesListContract) {
		const fileListArray = contract.filesList.split('\n').filter(Boolean);

		await this.dbInlinePolicyService.setFileList(contract.policyId, fileListArray, contract.type);
	}
}
