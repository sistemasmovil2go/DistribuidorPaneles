import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ synchronize: true })
export class Tbl_Dashboard extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ip: string;

  @Column()
  puesto: string;

  @Column()
  equipo: string;
}
