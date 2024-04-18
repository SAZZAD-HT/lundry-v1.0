import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity()
export class UserTable
{
    @PrimaryGeneratedColumn()
    UserId: number;
    @Column()
    Name: String;
    @Column()
    TypeId:Number;
    @Column() 
    Email: String;
    @Column()
    Password: String; 
    @Column() 
    Address: String;
    @Column()
    IsApproved: boolean;
    @Column()
    ProfilePicUrl: string;
    @Column()
    IsActive: boolean;
    @Column()
    CreateDate: Date;
    @Column()
    ActionDate: Date;
    @Column()
    ActionBy: number;
}
