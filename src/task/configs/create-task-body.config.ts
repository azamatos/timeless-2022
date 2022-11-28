import { ApiBodyOptions } from '@nestjs/swagger';

export const CreateTaskBody: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      isCompleted: { type: 'boolean' },
      taskListid: { type: 'number' },
    },
  },
};
