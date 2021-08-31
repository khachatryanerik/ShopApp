import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 20 })
    first_name: string;

    @Column({ type: "varchar", length: 30 })
    last_name: string;

    @Column({ type: "varchar", length: 50 })
    address: string;

    @Column({ type: "int" })
    card: number;
}
