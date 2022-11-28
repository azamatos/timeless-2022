import { ApiBodyOptions } from '@nestjs/swagger';

export const UpdateTaskListBody: ApiBodyOptions = {
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
