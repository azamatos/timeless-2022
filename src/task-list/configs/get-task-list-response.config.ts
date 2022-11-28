import { ApiResponseOptions } from '@nestjs/swagger';

export const GetTaskListResponse: ApiResponseOptions = {
  status: 200,
  description: 'Returns task list by id',
  schema: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      tasks: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            name: { type: 'string' },
            isCompleted: { type: 'boolean' },
          },
        },
      },
    },
  },
};
