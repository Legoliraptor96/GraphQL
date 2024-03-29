import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm"

//columnas de la tabla
@Entity()
export class Users extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string

    @Column()
    username:string

    @Column()
    password:string

}