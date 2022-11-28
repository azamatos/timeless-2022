import { ApiBodyOptions } from '@nestjs/swagger';

export const UserBody: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      login: { type: 'string' },
      password: { type: 'string' },
    },
  },
};
