import { ApiResponseOptions } from '@nestjs/swagger';

export const LoginUserResponse: ApiResponseOptions = {
  status: 200,
  description: 'Returns user token',
  schema: {
    type: 'object',
    properties: {
      token: { type: 'string' },
    },
  },
};
