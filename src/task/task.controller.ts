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
import { TaskService } from './task.service';

// configs
import { RemoveTaskResponse } from './configs/remove-task-response.config';
import { CreateTaskResponse } from './configs/create-task-response.config';
import { UpdateTaskResponse } from './configs/update-task-response.config';
import { GetTaskResponse } from './configs/get-task-response.config';
import { UpdateTaskBody } from './configs/update-task-body.config';
import { CreateTaskBody } from './configs/create-task-body.config';
import { TaskParam } from './configs/task-param.config';

// types
import { CreateTask } from './dto/create-task';
import { UpdateTask } from './dto/update-task';

@Controller('task')
@ApiTags('Task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a task' })
  @ApiBody(CreateTaskBody)
  @ApiBearerAuth('access-token')
  @ApiResponse(CreateTaskResponse)
  @UsePipes(ValidationPipe)
  create(@Req() request: Request, @Body() createDto: CreateTask) {
    const { authorization } = request.headers;
    return this.taskService.create(authorization, createDto);
  }

  @Put('update')
  @ApiOperation({ summary: 'Update a task' })
  @ApiBody(UpdateTaskBody)
  @ApiBearerAuth('access-token')
  @ApiResponse(UpdateTaskResponse)
  @UsePipes(ValidationPipe)
  update(@Req() request: Request, @Body() updateDto: UpdateTask) {
    const { authorization } = request.headers;
    return this.taskService.update(authorization, updateDto.id, updateDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a task by id' })
  @ApiParam(TaskParam)
  @ApiBearerAuth('access-token')
  @ApiResponse(GetTaskResponse)
  @UsePipes(ValidationPipe)
  getTask(@Req() request: Request, @Param('id') id: number) {
    const { authorization } = request.headers;
    return this.taskService.getTask(authorization, +id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a task by id' })
  @ApiParam(TaskParam)
  @ApiBearerAuth('access-token')
  @ApiResponse(RemoveTaskResponse)
  @UsePipes(ValidationPipe)
  remove(@Req() request: Request, @Param('id') id: number) {
    const { authorization } = request.headers;
    return this.taskService.remove(authorization, +id);
  }
}
