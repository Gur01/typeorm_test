import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Users {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 25 })
    name: string;

    @Column({ type: 'varchar', length: 25 })
    email: string;

    @Column({ type: 'varchar', length: 10 })
    password: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    registerDate: string;
}
