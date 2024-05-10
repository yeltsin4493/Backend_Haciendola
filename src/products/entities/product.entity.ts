import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity()
export class Product {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  handle: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  sku: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  grams: number;

  @Column()
  stock: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  compare_price: number;

  @Column()
  barcode: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
