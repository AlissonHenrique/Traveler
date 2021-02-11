import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('categories')
export default class Categories {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
