import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Places from './Places';

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
  number: number;

  @OneToMany(() => Places, places => places.addresses)
  @JoinColumn({ name: 'address_id' })
  places: Places[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
