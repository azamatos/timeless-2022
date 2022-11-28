import { ApiResponseOptions } from '@nestjs/swagger';

export const UpdateTaskResponse: ApiResponseOptions = {
  status: 200,
  description: 'Returns updated task',
  schema: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      isCompleted: { type: 'boolean' },
      TaskList: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
        },
      },
    },
  },
};
