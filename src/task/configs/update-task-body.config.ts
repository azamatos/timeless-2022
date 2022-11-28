import { ApiBodyOptions } from '@nestjs/swagger';

export const UpdateTaskBody: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      isCompleted: { type: 'boolean' },
    },
  },
};
