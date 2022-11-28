import { ApiResponseOptions } from '@nestjs/swagger';

export const CreateTaskListResponse: ApiResponseOptions = {
  status: 201,
  description: 'Returns created task list',
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
