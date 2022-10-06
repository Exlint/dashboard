import {
	BadRequestException,
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Logger,
	Param,
	Post,
	UseGuards,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RealIP } from 'nestjs-real-ip';
import {
	ApiBearerAuth,
	ApiCreatedResponse,
	ApiInternalServerErrorResponse,
	ApiOperation,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CurrentUserId } from '@/decorators/current-user-id.decorator';
import { BelongingGroupGuard } from '@/guards/belonging-group.guard';

import Routes from './inline-policies.routes';
import { CreateDto } from './classes/create.dto';
import { CreateContract } from './commands/contracts/create.contract';
import { GroupHasLibraryContract } from './queries/contracts/group-has-library.contract';

@ApiTags('Inline Policies')
@Controller(Routes.CONTROLLER)
export class createController {
	private readonly logger = new Logger(createController.name);

	constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

	@ApiOperation({ description: 'Create a new inline policy with label, description and chosen library' })
	@ApiBearerAuth('access-token')
	@ApiCreatedResponse({
		description: 'If successfully created the inline policy',
	})
	@ApiUnauthorizedResponse({
		description: 'If access token is missing or invalid',
	})
	@ApiInternalServerErrorResponse({ description: 'If failed to create inline policy' })
	@UseGuards(BelongingGroupGuard)
	@Post(Routes.CREATE)
	@HttpCode(HttpStatus.CREATED)
	public async create(
		@CurrentUserId() userId: string,
		@Param('group_id') groupId: string,
		@Body() createDto: CreateDto,
		@RealIP() ip: string,
	): Promise<void> {
		this.logger.log(
			`Will try to create an inline policy for a user with an Id: "${userId}" and for group with Id: "${groupId}". Label is "${createDto.label}"`,
		);

		const groupHasLibrary = await this.queryBus.execute<GroupHasLibraryContract, boolean>(
			new GroupHasLibraryContract(groupId, createDto.library),
		);

		if (groupHasLibrary) {
			throw new BadRequestException();
		}

		await this.commandBus.execute<CreateContract, void>(
			new CreateContract(
				userId,
				groupId,
				createDto.label,
				createDto.description,
				createDto.library,
				ip,
			),
		);

		this.logger.log(
			`Successfully created an inline policy for a user with an Id: "${userId}" and for group with Id: "${groupId}". Label is "${createDto.label}"`,
		);
	}
}
