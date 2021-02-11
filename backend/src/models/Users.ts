import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export default class Users {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
