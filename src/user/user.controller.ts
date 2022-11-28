import {
  Body,
  Controller,
  Post,
  Put,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';

// swagger
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

// project imports
import { UserService } from './user.service';

// configs
import { UpdatePasswordResponse } from './configs/update-password-response.config';
import { RegisterUserResponse } from './configs/register-user-response.config';
import { LoginUserResponse } from './configs/login-user-response.config';

// types
import { UserData } from './dto/userData';
import { UserBody } from './configs/user-body.config';

@Controller('/')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a user' })
  @ApiBody(UserBody)
  @ApiResponse(RegisterUserResponse)
  @UsePipes(ValidationPipe)
  register(@Body() registerInput: UserData) {
    return this.userService.register(registerInput);
  }

  @Post('login')
  @ApiOperation({ summary: 'Logging in user' })
  @ApiBody(UserBody)
  @ApiResponse(LoginUserResponse)
  @UsePipes(ValidationPipe)
  login(@Body() loginINput: UserData) {
    return this.userService.login(loginINput);
  }

  @Put('user/update')
  @ApiOperation({ summary: 'Updating user password' })
  @ApiBody(UserBody)
  @ApiResponse(UpdatePasswordResponse)
  @UsePipes(ValidationPipe)
  updatePassword(@Body() updateUserInput: UserData) {
    return this.userService.updatePassword(updateUserInput);
  }
}
