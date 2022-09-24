import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtModule } from '@nestjs/jwt';

import { AvailableLabelController } from './available-label.controller';
import { CommandHandlers } from './commands/handlers';
import { CreateController } from './create.controller';
import { DeleteController } from './delete.controller';
import { EditSecretController } from './edit-label.controller';
import { GetAllController } from './get-all.controller';
import { BelongingSecretGuard } from './guards/belonging-secret.guard';
import { QueryHandlers } from './queries/handlers';
import { RefreshSecretController } from './refresh-secret.controller';
import { SecretsService } from './secrets.service';

@Module({
	imports: [CqrsModule, JwtModule.register({})],
	controllers: [
		DeleteController,
		RefreshSecretController,
		CreateController,
		EditSecretController,
		GetAllController,
		AvailableLabelController,
	],
	providers: [...CommandHandlers, ...QueryHandlers, BelongingSecretGuard, SecretsService],
})
export class SecretsModule {}
