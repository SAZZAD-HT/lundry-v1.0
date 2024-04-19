import { Module } from '@nestjs/common';
import{TypeOrmModule} from '@nestjs/typeorm';
import { UserTable } from './Entity/UserTable';
import { UserType } from './Entity/UserType';


@Module({
	imports:[
	TypeOrmModule.forRoot({
      type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'lundry',
        //entities: [Mosque,User,UserBookings,BookingMosque,Announcemententity],
        autoLoadEntities: true,
        synchronize: true,
	}),TypeOrmModule.forFeature([UserTable,UserType])
	],
  providers: [],
  controllers: []

  
})
export class DatabaseConfig {}
