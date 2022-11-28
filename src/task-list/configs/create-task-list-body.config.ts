import { ApiBodyOptions } from '@nestjs/swagger';

export const CreateTaskListBody: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      create: { type: 'string' },
      read: { type: 'string' },
      update: { type: 'string' },
      delete: { type: 'string' },
    },
  },
};
