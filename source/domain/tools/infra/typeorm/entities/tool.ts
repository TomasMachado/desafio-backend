import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Tag } from "./tags";

@Entity("tools")
class Tool {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  link: string;

  // @ManyToMany(() => Tag)
  // @JoinTable()
  // tags: Tag[]
  @Column("simple-array")
  tags: string[];
}

export default Tool;
