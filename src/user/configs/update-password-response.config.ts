import { ApiResponseOptions } from '@nestjs/swagger';

export const UpdatePasswordResponse: ApiResponseOptions = {
  status: 200,
  description: 'Returns updated user',
  schema: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      login: { type: 'string' },
    },
  },
};
