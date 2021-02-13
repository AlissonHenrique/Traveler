import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import Depositions from './Depositions';

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

  @OneToMany(() => Depositions, depositions => depositions.cities)
  @JoinColumn({ name: 'city_id' })
  depositions: Depositions[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
