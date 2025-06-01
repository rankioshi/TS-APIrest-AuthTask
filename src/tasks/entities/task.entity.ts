import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export enum TaskStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

@Entity()
export class Task {
  @ApiProperty({
    description: 'Task ID',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Task title',
    example: 'Complete homework',
  })
  @Column()
  title: string;

  @ApiProperty({
    description: 'Task description',
    example: 'Math exercises',
    nullable: true,
  })
  @Column({ nullable: true })
  description?: string;

  @ApiProperty({
    description: 'Task status',
    enum: TaskStatus,
    example: TaskStatus.PENDING,
  })
  @Column({
    type: 'simple-enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus;

  @ApiProperty({
    description: 'Task due date',
    example: '2025-06-10T00:00:00Z',
    nullable: true,
  })
  @Column({ nullable: true })
  dueDate?: Date;

  @ApiProperty({
    description: 'User ID',
    example: 1,
  })
  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ApiProperty({
    description: 'Task creation date',
    example: '2025-05-31T12:00:00Z',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'Task last update date',
    example: '2025-05-31T12:00:00Z',
  })
  @UpdateDateColumn()
  updatedAt: Date;
}
