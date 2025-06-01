import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { GetUser } from '../common/decorators/get-user.decorator';
import { FilterTasksDto } from './dto/filter-tasks.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { TaskStatus } from './entities/task.entity';
import { TaskResponseDto } from './dto/task-response.dto';

@ApiTags('tasks')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({ 
    status: 201, 
    description: 'Task successfully created', 
    type: TaskResponseDto 
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @GetUser('userId') userId: number) {
    return this.tasksService.create(createTaskDto, userId);
  }
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ 
    status: 200, 
    description: 'Return all tasks',
    type: [TaskResponseDto]
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiQuery({ 
    name: 'status', 
    required: false, 
    enum: TaskStatus,
    description: 'Filter tasks by status'
  })
  @Get()
  findAll(
    @GetUser('userId') userId: number,
    @Query() filterTasksDto: FilterTasksDto,
  ) {
    return this.tasksService.findAll(userId, filterTasksDto);
  }
  @ApiOperation({ summary: 'Get a task by ID' })
  @ApiResponse({ 
    status: 200, 
    description: 'Return the task',
    type: TaskResponseDto
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Task not found' })
  @Get(':id')
  findOne(@Param('id') id: string, @GetUser('userId') userId: number) {
    return this.tasksService.findOne(+id, userId);
  }
  @ApiOperation({ summary: 'Update a task' })
  @ApiResponse({ 
    status: 200, 
    description: 'Task successfully updated',
    type: TaskResponseDto
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Task not found' })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @GetUser('userId') userId: number,
  ) {
    return this.tasksService.update(+id, updateTaskDto, userId);
  }

  @ApiOperation({ summary: 'Delete a task' })
  @ApiResponse({ status: 200, description: 'Task successfully deleted' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Task not found' })
  @Delete(':id')
  remove(@Param('id') id: string, @GetUser('userId') userId: number) {
    return this.tasksService.remove(+id, userId);
  }
}
