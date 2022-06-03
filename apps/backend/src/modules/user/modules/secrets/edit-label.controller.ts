import { Body, Controller, HttpCode, HttpStatus, Logger, Patch, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { EditSecretDto } from './classes/edit-secret.dto';
import { EditSecretContract } from './commands/contracts/edit-secret.contract';
import { BelongingSecretGuard } from './guards/belonging-secret.guard';
import Routes from './secrets.routes';

@Controller(Routes.CONTROLLER)
export class EditSecretController {
	private readonly logger = new Logger(EditSecretController.name);

	constructor(private readonly commandBus: CommandBus) {}

	@UseGuards(BelongingSecretGuard)
	@Patch(Routes.EDIT_LABEL)
	@HttpCode(HttpStatus.OK)
	public async refreshSecret(@Body() editSecretDto: EditSecretDto): Promise<void> {
		this.logger.log(`Will try to edit a client secret with Id: "${editSecretDto.secretId}"`);

		await this.commandBus.execute<EditSecretContract, string>(
			new EditSecretContract(editSecretDto.secretId, editSecretDto.label),
		);

		this.logger.log('Successfully edited a client secret');
	}
}
