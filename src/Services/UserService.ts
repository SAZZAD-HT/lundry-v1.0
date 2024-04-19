import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { UserTable } from 'src/DatabaseModels/Entity/UserTable';
import { UserDto } from 'src/Dtos/USerDto';

import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserTable)
        private readonly userRepo: Repository<UserTable>,
    ) {}
    
    async findAll(): Promise<UserTable[]> {
        const data = await this.userRepo.find({ where: { IsActive: true  , IsApproved:true} });
        return data;
    }
    
    async findOneBy(UserId: number): Promise<UserTable> {
        return await this.userRepo.findOneBy({UserId});
    }
    
    async create(user: UserDto): Promise<UserTable> {
        var u = new UserTable();
        var reponse="";
        
         u.Name=user.Name;
         u.TypeId=user.TypeId;
         u.Email=user.Email;
         u.Password=user.Password;
         u. Address=user.Address;
         u. IsApproved=user.IsApproved;
         u.ProfilePicUrl=user.ProfilePicUrl;
         u.IsActive=user.IsActive;
         u.CreateDate= new Date();
         u.ActionDate= new Date();
         u.ActionBy=user.ActionBy;
         if(user.UserId==0){
         var resp=await this.userRepo.save(u);
         if(resp!=null)
         {
            reponse="User Created";
         }
        }
        else
        {
            var respq=await this.userRepo.update(user.UserId, u);
            if(respq!=null)
            {
               reponse="User Updated ";
            }
        }
        return resp ;
    }
    
   
    
    async delete(id: number): Promise<void> {

        if(!await this.userRepo.findOneBy({UserId:id})){
            throw new NotFoundException('User not found');}
            else{
                var data=await this.userRepo.findOneBy({UserId:id})
                data.IsActive=false
                var respq=await this.userRepo.update(id, data);

            }
       
    }

    async findOne(UserId: number): Promise<UserTable> {
        return await this.userRepo.findOneBy({UserId});
    }
    

    
    async signin(email: string, password: string) 
    {
                        
        
    }
    }
