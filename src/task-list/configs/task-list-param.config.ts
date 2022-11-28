import { ApiParamOptions } from '@nestjs/swagger';

export const TaskListParam: ApiParamOptions = {
  name: 'id',
  required: true,
  description: 'task list identificator',
  schema: { type: 'integer' },
};
