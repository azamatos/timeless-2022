import { ApiResponseOptions } from '@nestjs/swagger';

export const GetTaskResponse: ApiResponseOptions = {
  status: 200,
  description: 'Returns task by id',
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
