import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({
    description: 'JWT access token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  accessToken: string;

  @ApiProperty({
    description: 'User details',
    example: {
      id: 1,
      name: 'Gabriel Seren',
      email: 'gabrielrankseren@gmail.com',
    },
  })
  user: {
    id: number;
    name: string;
    email: string;
  };
}
