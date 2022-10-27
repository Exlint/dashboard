import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';

import { DBInlinePolicyService } from '@/modules/database/inline-policy.service';

import { SetFileListContract } from '../contracts/set-file-list.contract';

@CommandHandler(SetFileListContract)
export class SetFileListHandler implements ICommandHandler<SetFileListContract> {
	constructor(private readonly dbInlinePolicyService: DBInlinePolicyService) {}

	async execute(contract: SetFileListContract) {
		const fileListArray = contract.fileList.split('\n').filter(Boolean);

		await this.dbInlinePolicyService.setFileList(contract.policyId, fileListArray, contract.type);
	}
}
