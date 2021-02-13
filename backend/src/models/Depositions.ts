import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import Cities from './Cities';
import Places from './Places';

@Entity('depositions')
export default class Depositions {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  description: string;

  @Column()
  city_id: string;

  @ManyToOne(() => Cities, cities => cities.depositions)
  @JoinColumn({ name: 'city_id' })
  cities: string;

  @Column()
  place_id: string;

  @ManyToOne(() => Places, places => places.depositions)
  @JoinColumn({ name: 'place_id' })
  places: Places;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
