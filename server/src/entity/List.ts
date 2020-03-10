import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class List {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    userId: number;

    @Column({type: 'json'})
    list: string;

    @Column()
    status: boolean;

    @Column({type:'timestamp'})
    date: number;

}
