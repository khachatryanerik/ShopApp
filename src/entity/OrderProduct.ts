import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity()
export class OrderProduct {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Order)
    @JoinColumn({ name: "order_id", referencedColumnName: "id" })
    order_id: Order;

    @ManyToOne(type => Product)
    @JoinColumn({ name: "product_id", referencedColumnName: "id" })
    product_id: Product;

    @Column({ type: "int" })
    cost: number;
}