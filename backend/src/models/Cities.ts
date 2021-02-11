import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('cities')
export default class Cities {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
