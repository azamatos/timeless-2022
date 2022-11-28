import { Request } from 'express';
import {
  Req,
  Body,
  Controller,
  Post,
  Delete,
  Param,
  Get,
  Put,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';

// swagger
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';

// project imports
import { TaskListService } from './task-list.service';

// configs
import { GetOthersTaskListsResponse } from './configs/get-others-task-lists-response.config';
import { GetUserTaskListsResponse } from './configs/get-user-task-lists-response.config';
import { CreateTaskListResponse } from './configs/create-task-list-response.config';
import { RemoveTaskListResponse } from './configs/remove-task-list-response.config';
import { UpdateTaskListResponse } from './configs/update-task-list-response.config';
import { GetTaskListResponse } from './configs/get-task-list-response.config';
import { UpdateTaskListBody } from './configs/update-task-list-body.config';
import { CreateTaskListBody } from './configs/create-task-list-body.config';
import { TaskListParam } from './configs/task-list-param.config';

// types
import { CreateTaskList } from './dto/create-task-list';
import { UpdateTaskList } from './dto/update-task-list';

@Controller('task-list')
@ApiTags('Task list')
export class TaskListController {
  constructor(private readonly taskListService: TaskListService) {}

  @Post('create')
  @ApiOperation({ summary: 'Craete a task list' })
  @ApiBody(CreateTaskListBody)
  @ApiBearerAuth('access-token')
  @ApiResponse(CreateTaskListResponse)
  @UsePipes(ValidationPipe)
  create(@Req() request: Request, @Body() createDto: CreateTaskList) {
    const { authorization } = request.headers;
    return this.taskListService.create(authorization, createDto);
  }

  @Put('update')
  @ApiOperation({ summary: 'Update a task list' })
  @ApiBody(UpdateTaskListBody)
  @ApiBearerAuth('access-token')
  @ApiResponse(UpdateTaskListResponse)
  @UsePipes(ValidationPipe)
  update(@Req() request: Request, @Body() updateDto: UpdateTaskList) {
    const { authorization } = request.headers;
    return this.taskListService.update(authorization, updateDto.id, updateDto);
  }

  @Get('mine')
  @ApiOperation({ summary: 'Return user task lists' })
  @ApiBearerAuth('access-token')
  @ApiResponse(GetUserTaskListsResponse)
  @UsePipes(ValidationPipe)
  getMyLists(@Req() request: Request) {
    const { authorization } = request.headers;
    return this.taskListService.getMyLists(authorization);
  }

  @Get('other')
  @ApiOperation({ summary: 'Return others task lists' })
  @ApiBearerAuth('access-token')
  @ApiResponse(GetOthersTaskListsResponse)
  @UsePipes(ValidationPipe)
  getOtherLists(@Req() request: Request) {
    const { authorization } = request.headers;
    return this.taskListService.getOtherLists(authorization);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Return a task list by id' })
  @ApiParam(TaskListParam)
  @ApiBearerAuth('access-token')
  @ApiResponse(GetTaskListResponse)
  @UsePipes(ValidationPipe)
  getList(@Req() request: Request, @Param('id') id: number) {
    const { authorization } = request.headers;
    return this.taskListService.getList(authorization, +id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a task list by id' })
  @ApiParam(TaskListParam)
  @ApiBearerAuth('access-token')
  @ApiResponse(RemoveTaskListResponse)
  @UsePipes(ValidationPipe)
  deleteList(@Req() request: Request, @Param('id') id: number) {
    const { authorization } = request.headers;
    return this.taskListService.remove(authorization, +id);
  }
}
