import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    occupation: string;

    @Column()
    age: number;

}
