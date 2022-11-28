import { ApiResponseOptions } from '@nestjs/swagger';

export const GetUserTaskListsResponse: ApiResponseOptions = {
  status: 200,
  description: 'Returns users task lists',
  schema: {
    type: 'array',
    items: {
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
  },
};
