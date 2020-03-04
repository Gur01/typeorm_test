import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Text {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    userId: number;

    @Column()
    text: string;

    @Column()
    status: boolean;

    @Column({type:'timestamp'})
    date: number;




}
