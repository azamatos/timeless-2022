import { ApiResponseOptions } from '@nestjs/swagger';

export const CreateTaskResponse: ApiResponseOptions = {
  status: 201,
  description: 'Returns created task',
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
