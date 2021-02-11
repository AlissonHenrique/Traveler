import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('addresses')
export default class Addresses {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  zip_code: string;

  @Column()
  street: string;

  @Column()
  neighborhood: string;

  @Column()
  number: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
