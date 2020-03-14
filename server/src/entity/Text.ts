import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Text {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    userId: number;

    @Column()
    text: string;

    @Column()
    status: boolean;

    @Column({ type: 'timestamp' })
    date: number;
}
