import {  Body,  Controller,  Delete,  FileTypeValidator,
    Get,  MaxFileSizeValidator,  Param,  ParseFilePipe,  
    ParseIntPipe,  Patch,  Post,  Put,  Query, 
     Res,  Session,  UnauthorizedException, 
      UploadedFile,  UseGuards,  UseInterceptors,  
      UsePipes,  ValidationPipe,} from '@nestjs/common';
import { UserTable } from 'src/DatabaseModels/Entity/UserTable';
import { UserDto } from 'src/Dtos/USerDto';
import { UserService } from 'src/Services/UserService';


@Controller('user')
export class UserController {

   
    constructor(private readonly userService: UserService
         ) {}
    
    @Get()
    async findAll(): Promise<UserTable[]> {
        return await this.userService.findAll();
    }
    
      @Get(':id')
    async findOne(@Param('id', ParseIntPipe) UserId: number): Promise<UserTable> {
        return await this.userService.findOneBy( UserId);
    }
    
    @Post('/create')
    async create(@Body() user: UserDto): Promise<UserTable> {
        console.log("Controller"+user);
        return await this.userService.create(user);
    }
    
    @Delete('/delete/:id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.userService.delete(id);

        
    
    }

    
//   @Post('/signin')
//   async signin(@Body() body: LoginUserDto, @Session() session: any) {
//     const user = await this.userService.signin(body. UserEmail, body. UserPassword);

//     session.userId =2565 ;
//     //console.log(session.userId);
//     console.log(user.Role);
//     return user;
//   }
  


//   @Post('/signout')
//  logout(@Session() session: any) {
//   console.log("logout"+session.userId);
//    session.userId = null;
//    session.destroy();
//    console.log("logout"+session.userId);
//    return { message: 'Signout successful' };
//  }
//  //http://localhost:3002/user/profile
//  @Get('/profile')
//  async profile(@Session() session: Record<string, any>) {
//    if (!session.userId) {
//      throw new UnauthorizedException('User is not logged in');
//    }
//    const user = await this.userService.findOne(session.userId);
//    return user + "profile";
//  }

}