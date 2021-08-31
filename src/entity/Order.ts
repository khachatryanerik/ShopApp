import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Client } from "./Client";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Client)
    @JoinColumn( { name: "client", referencedColumnName: "id" })
    client: Client;

    @Column({ type: "varchar", length: 10 })
    date: string;

    @Column({ type: "int" })
    cost: number;
}
