import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity()
export class UserType
{
    @PrimaryGeneratedColumn()
    Id: number;
    @Column()
    TypeName: String;
}
