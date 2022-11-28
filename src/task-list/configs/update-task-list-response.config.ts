import { ApiResponseOptions } from '@nestjs/swagger';

export const UpdateTaskListResponse: ApiResponseOptions = {
  status: 200,
  description: 'Returns updated task list',
  schema: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      create: { type: 'string' },
      read: { type: 'string' },
      update: { type: 'string' },
      delete: { type: 'string' },
    },
  },
};
