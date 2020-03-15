import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class List {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    userId: number;

    @Column({ type: 'json' })
    list: string;

    @Column({ default: true })
    status: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date: string;
}
