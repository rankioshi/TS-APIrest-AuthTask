import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

// This module explicitly exports common components to prevent import issues
@Module({
  providers: [],
  exports: [],
})
export class CommonModule {}
