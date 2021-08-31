import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 20 })
    name: string;

    @Column({ type: "varchar", length: 120 })
    description: string;

    @Column({ type: "varchar", length: 10 })
    measure: string;

    @Column({ type: "varchar", length: 10 })
    currency: string;

    @Column({ type: "int" })
    price: number;

    @Column({ type: "int" })
    quantity: number;
}
