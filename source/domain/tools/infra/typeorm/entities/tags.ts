import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("tags")
class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export { Tag };
