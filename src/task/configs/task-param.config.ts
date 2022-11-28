import { ApiParamOptions } from '@nestjs/swagger';

export const TaskParam: ApiParamOptions = {
  name: 'id',
  required: true,
  description: 'task identificator',
  schema: { type: 'integer' },
};
