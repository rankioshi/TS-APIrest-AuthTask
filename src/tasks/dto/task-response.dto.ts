import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../entities/task.entity';

export class TaskResponseDto {
  @ApiProperty({
    description: 'Task ID',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Task title',
    example: 'Complete homework',
  })
  title: string;

  @ApiProperty({
    description: 'Task description',
    example: 'Math exercises pages',
    nullable: true,
  })
  description?: string;

  @ApiProperty({
    description: 'Task status',
    enum: TaskStatus,
    example: TaskStatus.PENDING,
  })
  status: TaskStatus;

  @ApiProperty({
    description: 'Task due date',
    example: '2025-06-10T00:00:00Z',
    nullable: true,
  })
  dueDate?: Date;

  @ApiProperty({
    description: 'User ID',
    example: 1,
  })
  userId: number;

  @ApiProperty({
    description: 'Task creation date',
    example: '2025-05-31T12:00:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Task last update date',
    example: '2025-05-31T12:00:00Z',
  })
  updatedAt: Date;
}
