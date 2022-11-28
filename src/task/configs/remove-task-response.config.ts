import { ApiResponseOptions } from '@nestjs/swagger';

export const RemoveTaskResponse: ApiResponseOptions = {
  status: 200,
  description: 'Removes task by id',
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
